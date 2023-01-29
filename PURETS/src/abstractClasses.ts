abstract class TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    abstract getSepia(): void
    // this is not an abstract class. Hence, an object can be declared from it directly
    getReelTime(): number {
        // some complex calculations
        return 8
    }
}    

//  const hc = new TakePhoto('test', 'Test') //you cant create an object from abstract classes directly. 
//  However, you van do this on the class that extends the abstract class. See below

class Facebook extends TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        //  implement as super from the super abstract class, I think
        super(cameraMode, filter)
    }

    getSepia(): void {
        
    }

}

// const hc = new Facebook('test', 'Test') 