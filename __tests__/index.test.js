import fs from 'fs';
import genDiff from '../src/index.js';

const expectedData = fs.readFileSync('__fixtures__/expectedPlain.txt', 'utf-8');

test('gendiff', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe(expectedData);
});
