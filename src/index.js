require('babel-register')({
	plugins: ['babel-plugin-rewire'],
	sourceMaps: 'inline'
});

require('babel-polyfill');

const main = require('./main');
console.log('\nAnswer:', main('AAAAABBBB', 'BAB'), '\n');
