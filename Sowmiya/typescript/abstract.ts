
//abstract ---> exactly blueprint 
//--> cannaot create the object for blue print
// class which extend the abstract class can create the object


//so abstract class is a blue print we cannot create the object for abstract class but 
//we can cteate a memory which inherits the abstract class every abstrct class have abstract method without
// implementation when the class extends the abstract they write the own implementation




//example


abstract class Phone{

    constructor(protected model:string){}

    abstract call():void;

    getModel():string{
        return this.model;
    }
}

class Samsung extends Phone{
    constructor(model:string){
        super(model);
    }
    call():void{
        console.log(`${this.model} is calling...`);
    }

}

class iPhone extends Phone {
    constructor(model: string) {
        super(model);
    }

    call(): void {
        console.log(`${this.model} is calling via FaceTime...`);
    }
}

const samsung = new Samsung("Galaxy S21");
const iphone = new iPhone("iPhone 12");

samsung.call(); 
iphone.call();



export{}