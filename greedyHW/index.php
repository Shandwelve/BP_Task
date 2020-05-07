<?php

//Task 1
require_once 'ServingStation.php';
$customers = [60, 10, 30];
$service = new ServingStation($customers);
echo $service->descendingServe();
echo $service->ascendingServe();

//Task 2
require_once 'Shows.php';
$show = new Shows();
$show->getMaxShowsNumber();

//Task 3
require_once 'Inventory.php';
$inventory = new Inventory();
echo $inventory->getOptimalInventory();

