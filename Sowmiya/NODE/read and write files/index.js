

// import fs 

const fs = require('fs');
const path = require('path');

// read file 

fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
});


//writefile / created a file and write the content 

fs.writeFile(path.join(__dirname,'files','reply.txt'),'sowmiya from bit',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("file has updated");
});


//appendfile / created a file and then append the content or directly append

fs.appendFile(path.join(__dirname,'files','reply.txt'),' i am going to complete my degree',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("message has uppended");
});

// rename file 

fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','finalfile.txt'),(err)=>{
    if(err){
        console.log("there is a problem while rename a while");
    }
    console.log("rename complete");
});


// deletefile unlink 

fs.unlink(path.join(__dirname,'files','demo.txt'),(err){
    if(err){
        console.log("error");
    }
});

//callback hell  call the other function before it gets complte to execute in sequentail


fs.writeFile(path.join(__dirname,'files','reply.txt'),'sowmiya from bit',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("file has updated");
    fs.appendFile(path.join(__dirname,'files','reply.txt'),' i am going to complete my degree BE -ece',(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log("message has uppended");
        fs.rename(path.join(__dirname,'files','finalfile.txt'),path.join(__dirname,'files','final.txt'),(err)=>{
            if(err){
                console.log("there is a problem while rename a while");
            }
            console.log("rename complete");
        });
    });
    

});

//to overcome callback hell use async and await 

//fsPromises --> try and catch and 

//function will wait until functions get executed 


const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        console.log(data);
        await fsPromises.appendFile(path.join(__dirname,'files','starter.txt'),' from bit');
        const append_data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        console.log(append_data);
    }catch(err){
        console.log(err);
    }

}
fileOps();


//createReadstream ---> read large file 
//createWritestream ---> write large file 

const rs = fs.createReadstream('./files/demo.txt','utf8');
const ws = fs.createWriteStream('./files/newdemo.txt');
rs.pipe(ws);

// or 

// rs.on('data',(dataChunk)=>{
//     ws.write=dataChunk;
// });




// create director 



fs.mkdir('./new',(err)=>{
    if(err){
        console.log("error");
    }
    console.log("directory created");
});

// remove directory

fs.rmdir('./new',(err)=>{
    if(err){
        console.log("error");
    }
    console.log("directory remove");
})



//existSync --> check and create directory

const fs = require('fs');
const path = require('path');

if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
    if(err){
        console.log("error");
    }
    console.log("directory created");
});
}



