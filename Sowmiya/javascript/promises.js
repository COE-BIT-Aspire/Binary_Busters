//promises --> commitment 


// you can run asynchronous operations sequentially in the order they are defined.


//state in promises 

// 1--> pending state
// 2--> fullfilled state
// 3 --> rejected state
// 4--> settled (excution fineshed)

// fisrt prgram 

//producing the promise  // construct the promise 

let myPromise = new Promise(function(resolve, reject) {
    const a = 4;
    const b = 5;
    setTimeout(() => {
        if (a === b) {
            resolve("values are equal");
        } else {
            reject("values are not equal");
        }
    }, 2000);
});


console.log(myPromise);


//then and catch methd -- consuming promise 


myPromise
    .then(function(value) {
        console.log(value); // Output: values are not equal
    })
    .catch(function(error) {
        console.error("Error:", error); // Output: Error: values are not equal
    });




//example 2:


function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if (drink === "coffee") {
            resolve("Order for coffee received");
        } else {
            reject("Other order rejected");
        }
    });
}

function processOrder(order) {
    return new Promise(function(resolve, reject) {
        console.log(order + " is processed");
        resolve("Order served");
    });
}

placeOrder('coffee')
    .then(function(order) {
        console.log(order);
        return processOrder(order);
    })
    .then(function(output) {
        console.log(output);
    })
    .catch(function(err) {
        console.error("Error:", err); // Handle and log errors
    });




//changing becomes length process if w ehave more then


//async await  --> to avaid the promise chain 


function placeOrder1(drink) {
    return new Promise(function(resolve, reject) {
        if (drink === "coffee") {
            resolve("Order for coffee received");
        } else {
            reject("Other order rejected");
        }
    });
}

function processOrder2(order) {
    return new Promise(function(resolve) {
        console.log(order + " is processed");
        resolve("Order served");
    });
}

async function serverorder(){

    let orderplaced = await placeOrder1('coffee');
    console.log(orderplaced);
    let procced_order = await processOrder2(orderplaced);
    console.log(procced_order);
}

serverorder();

