import test from 'ava';

import main from '../src/main.js';

test('Function exists', t => {
	t.is(typeof main, 'function');
});

test('Minimum window substring', t => {
	const result = main('AAAAABBBB', 'BAB');
	t.same(result, 'ABB');
});
