class NodeTree<T> {
  key: number;
  value: T;
  left?: NodeTree<T>;
  right?: NodeTree<T>;
   constructor(_key: number, _value: T) {
          this.key = _key;
          this.value = _value;
          this.left = undefined;
          this.right = undefined;
        }
}

class BinaryTree <T> {
    root: NodeTree<T>;
constructor(_root: NodeTree<T>) {
        this.root = _root;
}
printTree(root: NodeTree<T>): void {
        if (root !== undefined) {
            console.log(root);
                if (root.left !== undefined) {
                this.printTree(root.left);
                }
                if (root.right !== undefined) {
                this.printTree(root.right);
                }

        }
 }
addNodeHelper(noderoot: NodeTree<T>, newNode: NodeTree<T>): void {
        if (newNode.value < noderoot.value) {
            if (noderoot.left === undefined) {
                noderoot.left = newNode;
            } else {
                this.addNodeHelper(noderoot.left, newNode);
            }
        } else {
            if (noderoot.right === undefined) {
                noderoot.right = newNode;
            } else {
                this.addNodeHelper(noderoot.right, newNode);
            }
        }
    }
    addNode(key: number, value: T): void {
        const newNode = new NodeTree<T>(key, value);
        if (this.root === undefined) {
            this.root = newNode;
        } else {
            this.addNodeHelper(this.root, newNode);
        }
    }
    searchByKey(root: NodeTree<T>, key: number): NodeTree<T> {
        // if (root === undefined || (this.root.value < root.value && root.left === undefined) || (this.root.value > root.value && root.right === undefined)) {
        if (root === undefined || key === root.key) {
            return root;
        } else if (key < root.key && root.left !== undefined) {
            return this.searchByKey(root.left, key);
        } else if (key > root.key && root.right !== undefined) {
            return this.searchByKey(root.right, key);
        } else {
            return root;
        }
    }
    minNode(node: NodeTree<T>): NodeTree<T> {
        if (node.left === undefined) {
            return node;
        } else {
            return this.minNode(node.left);
        }
    }
    remove(value: T): void {
        this.root = this.removeNode(this.root, value);
    }
    removeNode(node: NodeTree<T>, value: T): NodeTree<T> {
        if (node === undefined) {
            return node;
        } else if (value < node.value && node.left !== undefined) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value && node.right !== undefined) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            if (node.left === undefined && node.right === undefined) {

                delete node.left;
                return node;
            }
            if (node.left === undefined && node.right !== undefined) {
                node = node.right;
                return node;
            } else if (node.right === undefined && node.left !== undefined ) {
                node = node.left;
                return node;
            }
            if (node.right !== undefined) {
            const newNode = this.minNode(node.right);
            node.value = newNode.value;
            node.right = this.removeNode(node.right, newNode.value);
            return node; }
        }
    }
}



const node = new NodeTree<number>(4, 11);
const tree = new BinaryTree(node);
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



