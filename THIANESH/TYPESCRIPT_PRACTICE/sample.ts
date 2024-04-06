export class sample{
    x:number;
    y:number;
    z:number;
    constructor(x:number,y:number,z:number){
        this.x=x;
        this.y=y;
        this.z=z;
    }
    //sum : number = this.x + this.y + this.z;
    adder = (): void =>{
        console.log("Added value is : ",this.x+this.y+this.z);
    }
}