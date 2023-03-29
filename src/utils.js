import * as fs from 'node:fs';

const file1Data = fs.readFileSync('file1.json', 'utf-8');
const file2Data = fs.readFileSync('file2.json', 'utf-8');
const parsedFile1 = JSON.parse(file1Data);
const parsedFile2 = JSON.parse(file2Data);

export {parsedFile1, parsedFile2};