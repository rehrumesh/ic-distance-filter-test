const fs = require('fs');

/**
 * Reads a file from a given path.
 *
 * @param {string} path
 * @returns file content as a string.
 */
const readFile = (path) => {
  if (!path) throw new Error('File Path reqired');

  return fs.readFileSync(path, 'utf8');
};

/**
 * Writes a file from a given path.
 *
 * @param {string} path
 * @param {string} content
 */
const writeFile = (path, content) => {
  if (!path || !content) throw new Error('output path and content is required');

  fs.writeFileSync(path, content);
};

/**
 * Converts a multiline string in to an array of JSON objects
 *
 * @param {string} fileContents: contents of a file as a string.
 * @returns an array of JSON objects
 */
const mapLinesToJSONArray = (fileContents) => {
  if (!fileContents) throw new Error('String expected');
  const lines = fileContents.split('\n');
  return lines.map((line) => JSON.parse(line));
};

module.exports = {
  readFile,
  writeFile,
  mapLinesToJSONArray,
};
