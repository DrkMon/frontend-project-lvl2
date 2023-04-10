import fs from 'fs';
import genDiff from '../src/index.js';
import getParsedFile from '../src/parsers.js';

const expectedData = fs.readFileSync('__fixtures__/expectedPlain.txt', 'utf-8');

test('gendiff', () => {
  expect(genDiff(getParsedFile('__fixtures__/file1.json'), getParsedFile('__fixtures__/file2.json'))).toBe(expectedData);
  expect(genDiff(getParsedFile('__fixtures__/file1.yml'), getParsedFile('__fixtures__/file2.yml'))).toBe(expectedData);
});
