
import _ from 'lodash';
  
const gendiff = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keys = _.union(keys1, keys2).sort();
  const result = keys.map((key) => {
    if(Object.hasOwn(file1, key) && !Object.hasOwn(file2, key)) {
      return `  - ${key}: ${file1[key]}`;
    }
    if(!Object.hasOwn(file1, key)) {
      return `  + ${key}: ${file2[key]}`;
    }
    if(Object.hasOwn(file1, key) && Object.hasOwn(file2, key)) {
      return file1[key] === file2[key] ? `    ${key}: ${file2[key]}` : `  - ${key}: ${file1[key]}\n  + ${key}: ${file1[key]}`;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default gendiff;