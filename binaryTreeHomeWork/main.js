class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  getRootNode() {
    return this.root;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  searchNode(node, data) {
    if (node === null) {
      return 0;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return 1;
    }
  }

  countDataApparition(node, data) {
    if (node === null) {
      return 0;
    }
    if (node.data === data) {
      return 1 + this.countDataApparition(node.left, data) + this.countDataApparition(node.right, data);
    }
    return this.countDataApparition(node.left, data) + this.countDataApparition(node.right, data);
  }

  searchLastsNodes(node) {
    if (node === null) {
      return null;
    }
    else if (node.left === null && node.right === null) {
      console.log(node.data);
    }
    this.searchLastsNodes(node.left);
    this.searchLastsNodes(node.right);
  }

  getElementsSum(node) {
    if (node === null) {
      return 0;
    }
      return node.data + this.getElementsSum(node.left) + this.getElementsSum(node.right);
  }

  getDepth(node) {
    if (node === null) {
    return 0;
    }
    else {
      if (this.getDepth(node.left) > this.getDepth(node.right)) {
        return this.getDepth(node.left) + 1;
      }
      else {
        return this.getDepth(node.right) + 1;
      }
    }
  }
}

let tree = new BinaryTree();

tree.insert(15);
tree.insert(25);
tree.insert(10);
tree.insert(7);
tree.insert(22);
tree.insert(17);
tree.insert(13);
tree.insert(5);
tree.insert(9);
tree.insert(27);

//tree.inorder(tree.getRootNode());
//            15
//            /\
//           10 25
//           /\ /\
//         7 13 22 27
//        /\    /
//       5  9  17

//tree.searchLastsNodes(tree.getRootNode());
//console.log(tree.searchNode(tree.getRootNode(), 22));
//console.log(tree.countDataApparition(tree.getRootNode(), 15));
//console.log(tree.getElementsSum(tree.getRootNode()));
//console.log(tree.getDepth(tree.getRootNode()));
