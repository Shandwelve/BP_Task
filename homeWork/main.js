class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyList {
  constructor() {
    this.nodeLenght = 0;
    this.head = null;
    this.tail = null;
  }

  addElementEnd(value){
    let node = new Node(value);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.tail = node;
      this.nodeLenght++;

      return node;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.tail = node;
    this.nodeLenght++;

    return node;
  }

  addElementBegin(value) {
    let node = new Node(value);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.tail = node;
      this.nodeLenght++;

      return node;
    }

    node.next = currentNode;
    this.head = node;
    this.nodeLenght++;

    return node;
  }
}

class Operations {
  constructor(array) {
    this.list = new SinglyList();
    this.array = array;
  }

  searchNodeAt(position) {
    let currentNode = this.list.head;
    let length = this.list.nodeLenght;
    let count = 1;

    if (length === 0 || position < 1 || position > length) {
      console.log('Error');
      return 0;
    }

    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode.data;
  }

  createList(option){
   if (option === 'coada') {
     for (let key in this.array) {
       this.list.addElementEnd(this.array[key]);
     }
   }
   else if (option === 'stiva') {
     for (let key in this.array) {
       this.list.addElementBegin(this.array[key]);
     }
   }
   else {
     return 0;
   }
  }

  writeList() {
    let currentNode = this.list.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  getSum(){
    let currentNode = this.list.head;
    let sum = 0;

    while (currentNode) {
      sum += currentNode.data;
      currentNode = currentNode.next;
    }
    console.log('Sum of elements: ' + sum);
  }

  getMax(){
    let currentNode = this.list.head;
    let max = currentNode.data;
    currentNode = currentNode.next;

    while (currentNode) {
      if(currentNode.data > max) {
        max = currentNode.data;
      }
      currentNode = currentNode.next;
    }

    console.log('Maximal element: ' + max);
  }

  getPrimeNumbers() {
    let currentNode = this.list.head;
    let primeNumbers = 0;

    while (currentNode) {
      if (this.isPrime(currentNode.data)) {
        primeNumbers++;
      }
      currentNode = currentNode.next;
    }

    console.log('Prime numbers: ' + primeNumbers);
  }

  isPrime(value) {
    if (value === 1) {
      return 0;
    }

    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return 0;
      }
    }
    return 1;
  }

  createParityArray(oddNumbers, evenNumbers) {
    let currentNode = this.list.head;

    while (currentNode) {
      if (currentNode.data % 2 === 0) {
        evenNumbers.push(currentNode.data);
      }
      else {
        oddNumbers.push(currentNode.data);
      }

      currentNode = currentNode.next;
    }

  }

}

// const test = [45, 78, 76, 61, 76, 64, 897, 645];
// let task1 = new Operations(test);
// task1.createList('stiva');
// task1.writeList();
// task1.getSum();
// task1.getMax();

// const test2 = [1, 2, 3, 4, 7, 8, 13, 15, 19, 257];
// let task2 = new Operations(test2);
// task2.createList('coada');
// task2.writeList();
// task2.getPrimeNumbers();

// const getFibonacci = (value, array) => {
//   let firstNumber = 0;
//   let secondNumber = 1;
//   let result;
//
//   if (value === 1) {
//     array.push(firstNumber);
//   }
//   else if (value > 1){
//     array.push(firstNumber);
//     array.push(secondNumber);
//   }
//
//
//   for (let i = 0; i < value - 2; i++) {
//     result = firstNumber + secondNumber;
//     firstNumber = secondNumber;
//     secondNumber = result;
//     array.push(result);
//   }
// };

// let test3 = [];
// getFibonacci(7, test3);
// let task3 = new Operations(test3);
// task3.createList('coada');
// task3.writeList();

// let test4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddNumbers = [];
// let evenNumbers = [];
//
// let task4 = new Operations(test4);
// task4.createList('coada');
// task4.createParityArray(oddNumbers, evenNumbers);
//
// let oddList = new Operations(oddNumbers);
// oddList.createList('coada');
// oddList.writeList();
//
// let evenList = new Operations(evenNumbers);
// evenList.createList('coada');
// evenList.writeList();
