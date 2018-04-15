import Testee from '../../src/js/Oracle';

describe( 'Oracle', () => {
	test( 'should return the answer to life, universe and everything', () => {
		const expected = '42';
		const actual = ( new Testee() ).answer();

		expect( actual ).toBe( expected );
	} );
} );
