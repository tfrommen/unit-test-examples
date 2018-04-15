<?php # -*- coding: utf-8 -*-

use PHPUnit\Framework\TestCase;

use tfrommen\UnitTestExamples\Oracle;

class OracleTest extends TestCase {

	public function test_return_expected_answer() {

		$this->assertSame( '42', ( new Oracle() )->answer() );
	}
}
