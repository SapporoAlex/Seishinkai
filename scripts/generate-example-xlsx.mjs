#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';

const outDir = path.join(process.cwd(), 'src', 'data', 'tables');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const data = [
  ['名前', '年齢', '出身地'],
  ['佐藤', 30, '東京'],
  ['鈴木', 25, '大阪'],
  ['高橋', 28, '北海道'],
];

const ws = XLSX.utils.aoa_to_sheet(data);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

const outPath = path.join(outDir, 'example.xlsx');
XLSX.writeFile(wb, outPath);
console.log('Wrote', outPath);
