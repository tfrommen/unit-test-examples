<?php # -*- coding: utf-8 -*-

use PHPUnit\Framework\TestCase;

use tfrommen\UnitTestExamples\FortuneTeller;
use tfrommen\UnitTestExamples\Oracle;

class FortuneTellerTest extends TestCase {

	use \Mockery\Adapter\Phpunit\MockeryPHPUnitIntegration;

	/**
	 * @dataProvider provide_answer_data
	 */
	public function test_return_expected_answer( string $expected, int $money, string $answer ) {

		$oracle = \Mockery::mock( Oracle::class, [
			'answer' => $answer,
		] );

		$actual = ( new FortuneTeller( $oracle ) )->answer( $money );

		$this->assertSame( $expected, $actual );
	}

	public function provide_answer_data() {

		return [
			'not enough money' => [
				'expected' => '',
				'money'    => 0,
				'answer'   => 'some answer here',
			],
			'negative money' => [
				'expected' => '',
				'money'    => -100,
				'answer'   => 'some answer here',
			],
			'enough money'     => [
				'expected' => 'some answer here',
				'money'    => 100,
				'answer'   => 'some answer here',
			],
		];
	}
}
