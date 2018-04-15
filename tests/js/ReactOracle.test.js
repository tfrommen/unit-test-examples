import React from 'react';

import { shallow } from 'enzyme';

import Testee from '../../src/js/ReactOracle';
import Answer from "../../src/js/Answer";

describe( '<ReactOracle />', () => {
	test( 'should render list of answers passed props', () => {
		const answers = [
			{ id: 23, text: 'Illuminatus!' },
			{ id: 42, text: '42.' },
		];
		const wrapper = shallow(
			<Testee answers={ answers } />
		);

		expect( wrapper.is( 'ul.oracle' ) );

		answers.forEach( ( { id, text } ) => {
			expect( wrapper.containsMatchingElement( <Answer id={ id } text={ text } /> ) );
		} );
	} );
} );
