<?php

class Shows
{
    private $spectacles = [
        [10, 15],
        [2, 4],
        [7, 9],
        [21, 23],
        [10, 12],
        [12, 15],
        [7, 8],
        [20, 24]
    ];

    public function getMaxShowsNumber()
    {
    usort($this->spectacles, ["Shows", "sort"]);
    $last = 0;
    echo "{$this->spectacles[$last][0]} {$this->spectacles[$last][1]} <br>";

    for ($i = 0; $i < count($this->spectacles); $i++) {
        if ($this->spectacles[$i][0] >= $this->spectacles[$last][1]) {
            echo "{$this->spectacles[$i][0]} {$this->spectacles[$i][1]} <br>";
            $last = $i;
        }
    }
    }

    private function sort($arr1, $arr2)
    {
        if($arr1[1] === $arr2[1]) {
            return 0;
        }
        return ($arr1[1] < $arr2[1]) ? -1 : 1;
    }
}