import Testee from '../../src/js/TranslatingOracle';

describe( 'TranslatingOracle', () => {
	test( 'should return the answer to life, universe and everything, in the current language', () => {
		const translation = 'some translation here';
		global.wp = {
			i18n: {
				__: jest.fn( () => translation ),
			},
		};

		const expected = translation;
		const actual = ( new Testee() ).answer();

		expect( actual ).toBe( expected );

		expect( global.wp.i18n.__ ).toHaveBeenCalledTimes( 1 );
		expect( global.wp.i18n.__ ).toHaveBeenCalledWith( 'The answer is 42.', 'some-textdomain-here' );

		delete global.wp;
	} );
} );
