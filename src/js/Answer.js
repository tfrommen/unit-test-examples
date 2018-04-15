import React from 'react';

const Answer = ( props ) => {
	const { id, text } = props;

	return (
		<li className="oracle__answer">
			Answer { id }: <em>{ text }</em>
		</li>
	);
};

export default Answer;
