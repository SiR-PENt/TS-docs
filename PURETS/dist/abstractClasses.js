"use strict";
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // this is not an abstract class. Hence, an object can be declared from it directly
    getReelTime() {
        // some complex calculations
        return 8;
    }
}
//  const hc = new TakePhoto('test', 'Test') //you cant create an object from abstract classes directly. 
//  However, you van do this on the class that extends the abstract class. See below
class Facebook extends TakePhoto2 {
    constructor(cameraMode, filter, burst) {
        //  implement as super from the super abstract class, I think
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
    }
}
// const hc = new Facebook('test', 'Test') 
