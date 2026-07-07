import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import XLSX from 'xlsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Very small CSV parser that handles quoted fields and commas
function parseCsv(text) {
  const rows = [];
  let cur = '';
  let row = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { cur += '"'; i++; } else { inQuotes = false; }
      } else {
        cur += ch;
      }
    } else {
      if (ch === '"') { inQuotes = true; }
      else if (ch === ',') { row.push(cur); cur = ''; }
      else if (ch === '\r') continue;
      else if (ch === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
      else { cur += ch; }
    }
  }
  // push last
  if (cur !== '' || row.length) { row.push(cur); rows.push(row); }
  return rows;
}

export async function parseTableData(relPath) {
  // relPath is expected relative to project root or an absolute path
  const abs = path.isAbsolute(relPath) ? relPath : path.join(process.cwd(), relPath);
  if (!fs.existsSync(abs)) throw new Error(`Table data file not found: ${abs}`);

  const ext = path.extname(abs).toLowerCase();
  if (ext === '.csv' || ext === '.txt') {
    const txt = fs.readFileSync(abs, 'utf-8');
    return parseCsv(txt);
  }

  if (ext === '.xlsx' || ext === '.xls') {
    const workbook = XLSX.readFile(abs, { cellDates: true });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const json = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
    return json;
  }

  if (ext === '.json') {
    const json = JSON.parse(fs.readFileSync(abs, 'utf-8'));
    // Expect JSON as array of arrays or array of objects
    if (Array.isArray(json) && json.length && Array.isArray(json[0])) return json;
    if (Array.isArray(json) && json.length && typeof json[0] === 'object') {
      // convert array of objects to header + rows
      const keys = Object.keys(json[0]);
      const rows = [keys];
      for (const obj of json) rows.push(keys.map(k => obj[k] ?? ''));
      return rows;
    }
    throw new Error('Unsupported JSON table shape');
  }

  throw new Error('Unsupported table file type: ' + ext);
}
