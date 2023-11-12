/* 

Filename: SophisticatedCode.js

Description: This code is a complex and elaborate program that implements a data structure for a binary search tree and provides various operations to manipulate it.

*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
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

    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
        } else {
            if (node.left === null && node.right === null) {
                node = null;
            } else if (node.left === null) {
                node = node.right;
            } else if (node.right === null) {
                node = node.left;
            } else {
                const minValue = this.findMinValue(node.right);
                node.value = minValue;
                node.right = this.removeNode(node.right, minValue);
            }
        }

        return node;
    }

    findMinValue(node) {
        if (node.left === null) {
            return node.value;
        } else {
            return this.findMinValue(node.left);
        }
    }

    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return false;
        }

        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }

    print() {
        return this.printNode(this.root);
    }

    printNode(node) {
        if (node === null) {
            return "";
        }

        let result = "";

        result += this.printNode(node.left);
        result += node.value + " ";
        result += this.printNode(node.right);

        return result;
    }
}

// Example usage

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(12);
bst.insert(18);

console.log("Binary Search Tree:");
console.log(bst.print());

bst.remove(5);
bst.remove(15);

console.log("Binary Search Tree (after removal):");
console.log(bst.print());

console.log("Searching for 18:", bst.search(18));
console.log("Searching for 5:", bst.search(5));