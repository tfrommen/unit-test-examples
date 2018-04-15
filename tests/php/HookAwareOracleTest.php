<?php # -*- coding: utf-8 -*-

use Brain\Monkey;
use PHPUnit\Framework\TestCase;

use tfrommen\UnitTestExamples\HookAwareOracle;

class HookAwareOracleTest extends TestCase {

	protected function setUp() {

		parent::setUp();
		Monkey\setUp();
	}

	protected function tearDown() {

		Monkey\tearDown();
		parent::tearDown();
	}

	public function test_return_unfiltered_answer() {

		$this->assertSame( '42', ( new HookAwareOracle() )->answer() );

		$this->assertSame( 1, did_action( 'give_answer' ) );

		$this->assertSame( 1, Monkey\Filters\applied( 'the_answer' ) );
	}
}
