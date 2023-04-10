import fs from 'fs';
import yaml from 'js-yaml';

const getParsedFile = (filePath) => {
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const parsedFile = yaml.load(fileData);
  return parsedFile;
};

export default getParsedFile;
