<?php # -*- coding: utf-8 -*-

namespace tfrommen\UnitTestExamples\Tests;

class WhatClassTest extends \PHPUnit_Framework_TestCase {

	public function test_what_method_should_do_what() {

		$actual = 'What is the actual result?';

		$expected = 'What is the expected result?';

		$this->assertSame( $expected, $actual, 'What should it do?' );
	}
}
