/// <reference path="lib/cannon.js" />
/// <reference path="lib/three.js" />
var GameObject = function (cannonBody, threeBody) {
    ///<param name="threeBody" type="THREE.Object3D">
    ///<param name="cannonBody" type="CANNON.Body">
    this.cannonBody = cannonBody;
    this.threeBody = threeBody;
    this.position = cannonBody.position;
    this.rotation = cannonBody.quaternion;
    this.link = function () {
        this.threeBody.position.copy(cannonBody.position);
        this.threeBody.quaternion.copy(cannonBody.quaternion);

    }
}