import _ from 'lodash';

const genDiff = (dataFile1, dataFile2) => {
  const keys1 = Object.keys(dataFile1);
  const keys2 = Object.keys(dataFile2);
  const keys = _.union(keys1, keys2).sort();
  const result = keys.map((key) => {
    if (Object.hasOwn(dataFile1, key) && !Object.hasOwn(dataFile2, key)) {
      return `  - ${key}: ${dataFile1[key]}`;
    }
    if (!Object.hasOwn(dataFile1, key)) {
      return `  + ${key}: ${dataFile2[key]}`;
    }
    if (Object.hasOwn(dataFile1, key) && Object.hasOwn(dataFile2, key)) {
      return dataFile1[key] === dataFile2[key] ? `    ${key}: ${dataFile2[key]}` : `  - ${key}: ${dataFile1[key]}\n  + ${key}: ${dataFile2[key]}`;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
