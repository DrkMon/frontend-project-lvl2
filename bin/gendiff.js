#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';
import getParsedFile from '../src/parsers.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filePath1, filePath2) => {
    console.log(genDiff(getParsedFile(filePath1), getParsedFile(filePath2)));
  });

program.parse();
