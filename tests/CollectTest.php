<?php

use PHPUnit\Framework\TestCase;
use Collect\Collect;

class CollectTest extends TestCase
{
    public function testOnly()
    {
        $collect = new Collect(['city' => 'Tomsk', 'age' => 18, 'b' => 3]);
        $result = $collect->only('city', 'b');
        $this->assertSame(['city' => 'Tomsk', 'b' => 3], $result);
    }

    public function testFirst()
    {
        $collect = new Collect(['first' => 1, 'second' => 2, 'third' => 3]);
        $result = $collect->first();
        $this->assertSame(1, $result);
    }

    public function testCount()
    {
        $collect = new Collect([1, 2, 3, 412, 'dasd', 321]);
        $result = $collect->count();
        $this->assertSame(6, $result);
    }

    public function testToArray()
    {
        $collect = new Collect([1, 2, 3, 4, 5]);
        $result = $collect->toArray();
        $this->assertSame([1,2,3,4,5], $result);
    }

}