#!/usr/bin/env node
import { parseTableData } from '../src/utils/parseTableData.js';

try {
  const rows = await parseTableData('src/data/tables/example.en.xlsx');
  console.log(JSON.stringify(rows, null, 2));
} catch (err) {
  console.error('Parse error:', err);
  process.exit(1);
}
