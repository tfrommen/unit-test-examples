import React, { Component } from 'react';

import Answer from './Answer';

class ReactOracle extends Component {
	render() {
		const { answers } = this.props;

		return (
			<ul className="oracle">
				{ answers.map( ( answer ) => (
					<Answer key={ answer.id } { ...answer } />
				) ) }
			</ul>
		);
	}
}

export default ReactOracle;
