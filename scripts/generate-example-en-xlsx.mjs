#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';

const outDir = path.join(process.cwd(), 'src', 'data', 'tables');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const data = [
  ['Name', 'Age', 'City'],
  ['Sato', 30, 'Tokyo'],
  ['Suzuki', 25, 'Osaka'],
  ['Takahashi', 28, 'Hokkaido'],
];

const ws = XLSX.utils.aoa_to_sheet(data);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

const outPath = path.join(outDir, 'example.en.xlsx');
XLSX.writeFile(wb, outPath);
console.log('Wrote', outPath);
