class Node {

    constructor(insertValue) {
        this.value = insertValue
        this.next = null
    }
}

class CircularLinkedList {

    constructor() {
        this.startNode = null;
    }


    insert(nodeValue) {
        let newNode = new Node(nodeValue)
        if (this.startNode == null) {
            this.startNode = newNode
            this.startNode.next = this.startNode
            return
        }
        let currentNode = this.startNode
        while (currentNode.next != this.startNode) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
        currentNode.next.next = this.startNode
    }

    print() {
        let currentNode = this.startNode;
        if (currentNode == null) {
            console.log("the list is empty")
            return
        }
        while (currentNode.next != this.startNode) {
            console.log(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(currentNode.value)
    }

    delete(nodeValue) {
        if (nodeValue == this.startNode.value) {
            if (this.startNode.next == this.startNode) {
                this.startNode = null
                return
            }
            else {
                this.startNode = this.startNode.next
            }
        }
        let currentNode = this.startNode;
        while (currentNode.next.value != nodeValue) {
            currentNode = currentNode.next
        }
        currentNode.next = currentNode.next.next
    }
}
