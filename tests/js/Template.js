import test from 'tape';

test( 'What are you testing?', ( assert ) => {
	const actual = 'What is the actual result?';

	const expected = 'What is the expected result?';

	assert.equal( actual, expected, 'What should it do?' );

	assert.end();
} );
