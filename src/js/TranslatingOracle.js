/**
 * Oracle knowing the answer to life, universe and everything, in the current language.
 */
class TranslatingOracle {
	/**
	 * Return the answer to life, universe and everything, in the current language.
	 * @return {string} An answer.
	 */
	answer() {
		return wp.i18n.__( 'The answer is 42.', 'some-textdomain-here' );
	}
}

export default TranslatingOracle;
