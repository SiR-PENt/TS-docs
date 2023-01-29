"use strict";
//  Let's assume a feature to take photo is about to be built
//  we create an interface TakePhoto for this 
//  now anyone who wants to create a feature to take photo,
//  the person must follow the protocols of takePhoto above
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
//  another example of interface to show that more arguments can 
// be used but not less. Here, we had the short argument
class YouTube {
    constructor(cameraMode, filter, burst, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
    createStory() {
        console.log('Story was created');
    }
}
