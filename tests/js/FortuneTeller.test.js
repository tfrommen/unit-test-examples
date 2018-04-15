import each from 'jest-each';

import Testee from '../../src/js/FortuneTeller';

describe( 'FortuneTeller', () => {
	each( [
		[ 0 ],
		[ 4 ],
		[ -5 ],
		[ '' ],
		[ '0' ],
		[ '4' ],
		[ '-5' ],
		[ undefined ],
		[ null ],
		[ true ],
		[ false ],
		[ [] ],
		[ {} ],
	] ).test( 'should remain silent for invalid or not enough money (%j)', ( money ) => {
		const expected = '';
		const actual = ( new Testee( null ) ).answer( money );

		expect( actual ).toBe( expected );
	} );

	const answer = 'some answer here';
	const oracle = {
		answer: () => answer,
	};

	each( [
		[ 5 ],
		[ 100 ],
		[ '5' ],
		[ '100' ],
	] ).test( 'should consult the oracle for enough money (%s)', ( money ) => {
		const expected = answer;
		const actual = ( new Testee( oracle ) ).answer( money );

		expect( actual ).toBe( expected );
	} );
} );
