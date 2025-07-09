class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    let uniq = [
      ...new Set(
        array.sort(function (a, b) {
          return a - b;
        })
      ),
    ];

    if (uniq.length == 0) {
      return null;
    }

    let mid = Math.floor(uniq.length / 2);
    let midElement = uniq[mid];

    let root = new Node(midElement);

    let leftArray = uniq.slice(0, mid);
    let rightArray = uniq.slice(mid + 1);

    root.left = this.buildTree(leftArray);
    root.right = this.buildTree(rightArray);

    return root;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }
  insertNode(root, value) {
    if (root === null) {
      return new Node(value);
    } else if (root.value === value) {
      return root;
    } else if (value < root.value) {
      root.left = this.insertNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.insertNode(root.right, value);
    }
    return root;
  }

  deleteItem(value) {
    this.root = this.deleteNode(this.root, value);
  }

  findMin(root) {
    let curr = root;
    while (curr.left != null) {
      curr = curr.left;
    }
    return curr;
  }

  deleteNode(root, value) {
    if (root === null) {
      console.log("NULL");
    } else if (root.value === value) {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      let minValue = this.findMin(root.right);
      root.value = minValue.value
      root.right = this.deleteNode(root.right, minValue.value);
    } else if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    }
    return root;
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
prettyPrint(tree.root);
tree.deleteItem(12);
prettyPrint(tree.root)
