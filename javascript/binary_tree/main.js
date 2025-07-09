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
    this.list = [];
    this.heightCount = 0;
    this.depthCount = 0;
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
      root.value = minValue.value;
      root.right = this.deleteNode(root.right, minValue.value);
    } else if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    }
    return root;
  }

  find(root, value) {
    if (root === null) {
      return null;
    } else if (root.value === value) {
      return root;
    } else if (root.value < value) {
      return this.find(root.right, value);
    } else if (root.value > value) {
      return this.find(root.left, value);
    }
  }

  levelOrder(root) {
    if (root == null) return null;
    this.list.push(root);

    this.levelOrder(root.right);
    this.levelOrder(root.left);
    return this.list;
  }

  preOrder(root) {
    if (root == null) return null;
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  inOrder(root) {
    if (root == null) return null;
    this.preOrder(root.left);
    console.log(root.value);
    this.preOrder(root.right);
  }

  postOrder(root) {
    if (root == null) return null;
    this.preOrder(root.left);
    this.preOrder(root.right);
    console.log(root.value);
  }

  depth(root, value) {
    if (root === null) {
      return null;
    } else if (root.value === value) {
      return this.depthCount;
    } else if (root.value < value) {
      this.depthCount += 1;
      return this.depth(root.right, value);
    } else if (root.value > value) {
      this.depthCount += 1;
      return this.depth(root.left, value);
    }
  }

  heightHelp(node) {
    if (!node) return -1;
    return (
      1 + Math.max(this.heightHelp(node.left), this.heightHelp(node.right))
    );
  }

  height(value) {
    const node = this.find(this.root, value);

    if (!node) {
      return null;
    }
    return this.heightHelp(node);
  }

  isBalanced(root) {
    let leftHeight;
    let rightHeight;
    if (root == null) {
      return true;
    }
    console.log(root.value)
    if (root.left != null) {
      leftHeight = this.height(root.left.value);
    } else if (root.right != null) {
      rightHeight = this.height(root.right.value);
    }
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    return this.isBalanced(root.left) && this.isBalanced(root.right);
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

let tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
prettyPrint(tree.root);
console.log(tree.isBalanced(tree.root))
