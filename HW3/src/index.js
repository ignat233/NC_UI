var NodeTree = /** @class */ (function () {
    function NodeTree(_key, _value) {
        this.key = _key;
        this.value = _value;
        this.left = undefined;
        this.right = undefined;
    }
    return NodeTree;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree(_root) {
        this.root = _root;
    }
    BinaryTree.prototype.printTree = function (root) {
        if (root !== undefined) {
            console.log(root);
            if (root.left !== undefined) {
                this.printTree(root.left);
            }
            if (root.right !== undefined) {
                this.printTree(root.right);
            }
        }
    };
    BinaryTree.prototype.addNodeHelper = function (noderoot, newNode) {
        if (newNode.value < noderoot.value) {
            if (noderoot.left === undefined) {
                noderoot.left = newNode;
            }
            else {
                this.addNodeHelper(noderoot.left, newNode);
            }
        }
        else {
            if (noderoot.right === undefined) {
                noderoot.right = newNode;
            }
            else {
                this.addNodeHelper(noderoot.right, newNode);
            }
        }
    };
    BinaryTree.prototype.addNode = function (key, value) {
        var newNode = new NodeTree(key, value);
        if (this.root === undefined) {
            this.root = newNode;
        }
        else {
            this.addNodeHelper(this.root, newNode);
        }
    };
    BinaryTree.prototype.searchByKey = function (root, key) {
        // if (root === undefined || (this.root.value < root.value && root.left === undefined) || (this.root.value > root.value && root.right === undefined)) {
        if (root === undefined || key === root.key) {
            return root;
        }
        else if (key < root.key && root.left !== undefined) {
            return this.searchByKey(root.left, key);
        }
        else if (key > root.key && root.right !== undefined) {
            return this.searchByKey(root.right, key);
        }
        else {
            return root;
        }
    };
    BinaryTree.prototype.minNode = function (node) {
        if (node.left === undefined) {
            return node;
        }
        else {
            return this.minNode(node.left);
        }
    };
    BinaryTree.prototype.remove = function (value) {
        this.root = this.removeNode(this.root, value);
    };
    BinaryTree.prototype.removeNode = function (node, value) {
        if (node === undefined) {
            return node;
        }
        else if (value < node.value && node.left !== undefined) {
            node.left = this.removeNode(node.left, value);
            return node;
        }
        else if (value > node.value && node.right !== undefined) {
            node.right = this.removeNode(node.right, value);
            return node;
        }
        else {
            if (node.left === undefined && node.right === undefined) {
                node = undefined;
                return node;
            }
            if (node.left === undefined && node.right !== undefined) {
                node = node.right;
                return node;
            }
            else if (node.right === undefined && node.left !== undefined) {
                node = node.left;
                return node;
            }
            if (node.right !== undefined) {
                var newNode = this.minNode(node.right);
                node.value = newNode.value;
                node.right = this.removeNode(node.right, newNode.value);
                return node;
            }
        }
    };
    return BinaryTree;
}());
var node = new NodeTree(4, 11);
var tree = new BinaryTree(node);
tree.addNode(2, 4);
tree.addNode(6, 14);
tree.addNode(1, 2);
tree.addNode(3, 8);
tree.addNode(5, 12);
tree.addNode(7, 64);
console.log("vcjhv");
tree.printTree(node);
console.log("Search key 2");
console.log(tree.searchByKey(node, 2));
console.log("Search key 5");
console.log(tree.searchByKey(node, 5));
console.log("Search key 7");
console.log(tree.searchByKey(node, 7));
tree.remove(4);
tree.printTree(node);
