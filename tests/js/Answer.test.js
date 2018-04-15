import React from 'react';

import TestRenderer from 'react-test-renderer';

import Testee from '../../src/js/Answer';

describe( '<Answer />', () => {
	test( 'should render an answer according to the passed props', () => {
		const id = 'some-id-here';
		const text = 'Some text here.';
		const testRenderer = TestRenderer.create(
			<Testee id={ id } text={ text } />
		);

		const output = testRenderer.toJSON();

		expect( output.type ).toBe( 'li' );
		expect( output.props.className ).toContain( 'oracle__answer' );
		expect( output.children ).toContain( id );

		expect( output ).toMatchSnapshot();
	} );
} );
