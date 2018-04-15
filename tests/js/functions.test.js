import { getAnswer } from '../../src/js/functions';

describe( 'getAnswer', () => {
	test( 'should return the answer to life, universe and everything', () => {
		const expected = '42';
		const actual = getAnswer();

		expect( actual ).toBe( expected );
	} );
} );
