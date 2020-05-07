<?php

class ServingStation
{
    private $customers = null;

    public function __construct($customers)
    {
        $this->customers = $customers;
    }

    public function descendingServe()
    {
        rsort($this->customers);
        $sum = 0;

        for ($i = 0; $i < count($this->customers); $i++) {
            for ($j = 0; $j <= $i - 1; $j++) {
                $sum += $this->customers[$j];
            }
        }

        return $sum;
    }

    public function ascendingServe()
    {
        sort($this->customers);
        $sum = 0;

        for ($i = 0; $i < count($this->customers); $i++) {
            for ($j = 0; $j <= $i - 1; $j++) {
                $sum += $this->customers[$j];
            }
        }

        return $sum;
    }
}

