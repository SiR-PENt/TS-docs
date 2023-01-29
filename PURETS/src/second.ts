//  Let's assume a feature to take photo is about to be built
//  we create an interface TakePhoto for this 

interface TakePhoto {
    cameraMode: string 
    filter: string
    burst: number
}
//  you can have a method definition in interfaces as seen below
interface Story {
    createStory(): void 
}

//  now anyone who wants to create a feature to take photo,
//  the person must follow the protocols of takePhoto above

class Instagram implements TakePhoto {
    constructor(
      public cameraMode: string,
      public filter: string,
      public burst: number
    ){

    }
}
//  another example of interface to show that more arguments can 
// be used but not less. Here, we had the short argument

class YouTube implements TakePhoto, Story {
    constructor(
      public cameraMode: string,
      public filter: string,
      public burst: number,
      public shorts: string
    ){

    }
    createStory(): void {
        console.log('Story was created')
    }
}


