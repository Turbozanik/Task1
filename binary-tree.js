'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

//		this.data = data; setIt 

	insert(data) {
		var node = new MyNode(data);

		if(this.root === null){
			this.root = node;
		}
	    
		if(data instanceof MyNode) {
        this.root.insert(data);
    	} else {
        this.root.insert(new MyNode(data));
    }
}

	contains(searchValue) {
	this.root.contains(searchValue);
	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
}

class MyNode{
	constructor(data){
		this.data = data;
		this.right = null;
		this.left = null;
	}

	insert(newNode){
		if(newNode.data < this.data) {
        if(this.left === null) {
            this.left = newNode;
        } else {
            this.left.insert(newNode);
        }
    } else if(newNode.data > this.data) {
        if(this.right === null) {
            this.right = newNode;
        } else {
            this.right.insert(newNode);
        }
    } else {
        return true;
    }
	}

	contains(searchValue){
		console.log(searchValue+": "+this.data);
    if(this.data === searchValue) {
        console.log("search item found");
        return true;
    } else if(searchValue < this.data && this.left !== null) {
        return this.left.contains(searchValue);
    } else if(searchValue > this.data && this.right !== null) {
        return this.right.contains(searchValue);
    } else {
        console.log("could not find "+searchValue);
        return false;
    }
	}

}