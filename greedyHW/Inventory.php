<?php

class Inventory
{
    private $resources = [
        0 => [
            'quantity' => 8,
            'price' => 16
        ],
        1 => [
            'quantity' => 6,
            'price' => 24
        ],
        2 => [
            'quantity' => 3,
            'price' => 15
        ]
    ];

    private $inventory = 13;
    private $money = 0;

    public function getOptimalInventory()
    {
        usort($this->resources, ['Inventory', 'sort']);
        $i = 0;
        while ($this->inventory != 0) {
            if ($this->inventory >= $this->resources[$i]['quantity']) {
                $this->inventory -= $this->resources[$i]['quantity'];
                $this->money += $this->resources[$i]['quantity'] * $this->resources[$i]['price'];
                $this->resources[$i]['quantity'] = 0;
            } else {
                $this->money += $this->inventory * $this->resources[$i]['price'];
                $this->resources[$i]['quantity'] -= $this->inventory;
                $this->inventory = 0;
            }
            $i++;
        }
        return $this->money;
    }

    private function sort($element1, $element2)
    {
        if ($element1['price'] == $element2['price2']) {
            return 0;
        }
        return $element1['price'] > $element2['price'] ? -1 : 1;
    }

}