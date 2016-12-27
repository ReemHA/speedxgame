/// <reference path="lib/Queue.src.js" />
var Pool = function () {
    this.listOfGameObjects = new Queue();
    this.getFromPool = function () {
        return this.listOfGameObjects.dequeue();
    }
    this.returnToPool = function (gameObject) {
        this.listOfGameObjects.enqueue(gameObject);
    }
}