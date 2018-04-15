<?php # -*- coding: utf-8 -*-

use Brain\Monkey;
use PHPUnit\Framework\TestCase;

use tfrommen\UnitTestExamples\TranslatingOracle;

class TranslatingOracleTest extends TestCase {

	protected function tearDown() {

		Monkey\tearDown();
		parent::tearDown();
	}

	public function test_return_number() {

		$answer = 'translated answer here';

		Monkey\Functions\expect( '__' )
			->once()
			->with( \Mockery::type( 'string' ), 'some-textdomain-here' )
			->andReturn( $answer );

		$this->assertSame( $answer, ( new TranslatingOracle() )->answer() );
	}
}
