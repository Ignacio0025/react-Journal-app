/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {},
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transformIgnorePatterns: ['/node_modules/'],
};

module.exports = config;
