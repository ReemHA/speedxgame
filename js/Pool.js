﻿/// <reference path="lib/cannon.js" />
/// <reference path="lib/three.js" />
/// <reference path="lib/Queue.src.js" />
var Pool = function (cannonBody, threeMesh) {
    this.listOfGameObjects = new Queue();
    // create 10 game objects in the pool of Game Objects
    for (var i = 0; i < 10; i++) {
        addToListOfGameObjects(this.listOfGameObjects, cannonBody, threeMesh);
        
    }

    this.getFromPool = function () {
        if (this.listOfGameObjects.getLength() == 0) {
            addToListOfGameObjects(this.listOfGameObjects, cannonBody, threeMesh);
        }
        var gameObject = this.listOfGameObjects.dequeue();
        gameObject.visible = true;
        return gameObject;
    }
    this.returnToPool = function (gameObject) {
        gameObject.visible = false;
        this.listOfGameObjects.enqueue(gameObject);
    }

    function addToListOfGameObjects(listOfGameObjects, cannonBody, threeMesh) {
        var mesh = (threeMesh).clone();
        var body = new CANNON.Body({ mass: cannonBody.mass });
        body.addShape(cannonBody.shapes[0]);
        listOfGameObjects.enqueue((new GameObject(body, mesh)));
    }
}