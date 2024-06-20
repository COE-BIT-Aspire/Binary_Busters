

//  union TYpe 

let score :number|string|boolean;
score = 10;
score=true;
score="10";


// using union simple problem 


type user = {
    name:string;
    id:number;
}

type admin ={
    username:string;
    id:number;
}

let result:user|admin={
    name:"sowmiya",
    id:21
}


// ---> error

// let result:admin={
//     name:"sowmiya",
//     id:21
// }




// union using function 

function greeting(msg:number|string):void{
    if(typeof msg === "string"){
        msg.toLowerCase();
        console.log(msg);
    }else{
        msg = msg+2;
        console.log(msg);
    }
}
greeting("hai Hello");
greeting(10);



// union  using array


//Here either be a string or number

const data:(string|number)[]=[];
data.push("one");
data.push(2);
data.push("three");
console.log("mixedarray:")
console.log(data);


export{}












