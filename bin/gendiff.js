#!/usr/bin/env node

import { program } from "commander";
import gendiff from "../src/index.js";
import { parsedFile1, parsedFile2 } from "../src/utils.js";

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => console.log(gendiff(parsedFile1, parsedFile2)))

  program.parse();