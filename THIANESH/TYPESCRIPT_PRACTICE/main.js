"use strict";
// let arr : any []=[1,'2',false,2.4];
// for(let i=0;i<=3;i++){
//     console.log(arr[i]+' ');
// }
Object.defineProperty(exports, "__esModule", { value: true });
// enum color {red = 0, green = 1, blue = 2}
// let bgcolor = color.blue;
// console.log(bgcolor);
// let log = ()=>console.log("This is from an arrow function!");
// class sample{
//     x:number;
//     y:number;
//     z:number;
//     constructor(x:number,y:number,z?:number){
//         this.x = x;
//         this.y = y;
//         // if(z!=undefined){
//         //     this.z = z;
//         // }
//         this.z = z;//this will work eventhough it shows error here in vs code
//     }
//     display = () : void =>{
//         console.log(this.x+" "+this.y+" "+this.z);        
//     }
// }
// let obj1 = new sample(10,20);
// obj1.display();
// class bank{
//     private balance : number = 10000 ; 
//     accnumber : number = 20232124;
//     display = ():void=>{
//         console.log(this.accnumber);
//     }
// }
// let bankbal = new bank();
// bankbal.accnumber=100;
// bankbal.display()
// bankbal.balance=200;
var sample_1 = require("./sample");
var obj1 = new sample_1.sample(10, 20, 30);
obj1.adder();
