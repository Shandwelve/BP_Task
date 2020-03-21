let fs = require('fs');
let patients = JSON.parse(fs.readFileSync('patients.json', 'utf8'));
let register = JSON.parse(fs.readFileSync('matricola.json', 'utf8'));

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

  addElement(value){
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
}

class Operations {
  constructor(json) {
    this.list = new SinglyList();
    this.json = json;
  }

  createList(){
    for (let key in this.json) {
      this.list.addElement(this.json[key]);
    }
  }

  writeList() {
    let aux = this.list.head;
    while (aux) {
      console.log(aux.data);
      aux = aux.next;
    }
  }

  task1(){
    let aux = this.list.head;

    console.log("First patient's name: " + aux.data.name.firstName + " " + aux.data.name.lastName);
    console.log("First patients birthday: " + aux.data.birthDay.day + " " + aux.data.birthDay.month + " " + + aux.data.birthDay.year);
  }

  task2(){
    let aux = this.list.tail;

    console.log("Last patient's name: " + aux.data.name.firstName + " " + aux.data.name.lastName);
    console.log("Diagnostic: " + aux.data.diagnostic);
  }

  task3(bloodType) {
    let aux = this.list.head;
    let count = 0;

    while (aux) {
      if(aux.data.bloodType === bloodType){
        count++;
      }

      aux = aux.next;
    }
    console.log(count + " patients witch " + bloodType + " bloodType");
  }

  task4(year) {
    let aux = this.list.head;
    let count = 0;

    while (aux) {
      if(aux.data.birthDay.year === year){
        count++;
      }

      aux = aux.next;
    }
    console.log(count + " patients born in " + year);
  }

  task9() {
    let aux = this.list.head;
    let min = 999;

    while (aux) {
      if (aux.data.height < min) {
        min = aux.data.height;
      }
      aux = aux.next;
    }
    console.log("Minimal height is: " + min);
  }

}

let operation = new Operations(patients);
//operation.createList();
//operation.writeList();
//operation.task1();
//operation.task2();
//operation.task3(2);
//operation.task4(2000);

let operation2 = new Operations(register);
operation2.createList();
//operation2.writeList();
//operation2.task9();
