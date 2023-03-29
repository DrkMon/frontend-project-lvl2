import * as fs from 'node:fs';
import _ from 'lodash';

const genDiff = (file1, file2) => {
  const file1Data = fs.readFileSync(file1, 'utf-8');
  const file2Data = fs.readFileSync(file2, 'utf-8');
  const parsedFile1 = JSON.parse(file1Data);
  const parsedFile2 = JSON.parse(file2Data);
  const keys1 = Object.keys(parsedFile1);
  const keys2 = Object.keys(parsedFile2);
  const keys = _.union(keys1, keys2).sort();
  const result = keys.map((key) => {
    if (Object.hasOwn(parsedFile1, key) && !Object.hasOwn(parsedFile2, key)) {
      return `  - ${key}: ${parsedFile1[key]}`;
    }
    if (!Object.hasOwn(parsedFile1, key)) {
      return `  + ${key}: ${parsedFile2[key]}`;
    }
    if (Object.hasOwn(parsedFile1, key) && Object.hasOwn(parsedFile2, key)) {
      return parsedFile1[key] === parsedFile2[key] ? `    ${key}: ${parsedFile2[key]}` : `  - ${key}: ${parsedFile1[key]}\n  + ${key}: ${parsedFile2[key]}`;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
