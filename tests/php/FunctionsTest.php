<?php # -*- coding: utf-8 -*-

use PHPUnit\Framework\TestCase;

use function tfrommen\UnitTestExamples\get_answer;

class FunctionsTest extends TestCase {

	public function test_return_expected_answer() {

		$expected = '42';

		$actual = get_answer();

		$this->assertSame( $expected, $actual );
	}
}
