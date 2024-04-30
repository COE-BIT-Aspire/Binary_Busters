
const gameScores = [
    { team: "Home", score: 24 },
    { team: "Away", score: 20 },
    { team: "Home", score: 30 },
    { team: "Away", score: 28 },
    { team: "Home", score: 35 },
];


function getTotalScore(teamName, scores) {
    let totalScore = 0;
    for (const score of scores) {
        if (score.team === teamName) {
            totalScore += score.score;
        }
    }
    return totalScore;
}

const homeTeamTotal = getTotalScore("Home", gameScores);
console.log("Home Team Total Score:", homeTeamTotal);




// Define an array of objects representing inventory items
const inventory = [
    { item: "Chair", quantity: 20 },
    { item: "Table", quantity: 15 },
    { item: "Desk", quantity: 10 },
    { item: "Chair", quantity: 30 },
];


function getTotalQuantity(itemName, items) {
    let totalQuantity = 0;
    for (const item of items) {
        if (item.item === itemName) {
            totalQuantity += item.quantity;
        }
    }
    return totalQuantity;
}

const chairQuantity = getTotalQuantity("Chair", inventory);
console.log("Total Chair Quantity:", chairQuantity);







const meetingAttendees = new Set();
function markAttendance(employeeId) {
    meetingAttendees.add(employeeId);
}


function hasAttended(employeeId) {
    return meetingAttendees.has(employeeId);
}

markAttendance("emp123");
markAttendance("emp456");
markAttendance("emp123");


console.log("Employee with ID emp123 has attended the meeting:", hasAttended("emp123"));
console.log("Employee with ID emp789 has attended the meeting:", hasAttended("emp789"));





// closure 




function outer_parent() {
    var num1 = 20;

    function inner1() {
        var num2 = 30;

        function inner2() {
            console.log(num1, num2);
        }

        num2 = 100;
        inner2();
    }
    inner1();
}

outer_parent();



//synchronous function 



function squareSync(x) {
    return x * x;
}

console.log("Before calculating square");
const squareResult = squareSync(5);
console.log("Square of 5:", squareResult);
console.log("After calculating square");



//asynchronous


function fetchDataAsync() {
    setTimeout(() => {
        const data = { id: 1, name: "John" };
        console.log("Fetched data:", data);
    }, 2000); // Fetches data after 2 seconds delay
}

console.log("Before fetching data");
fetchDataAsync();
console.log("After fetching data");




//setTimout || callbackfunction 


setTimeout(() => {
    console.log("Inside setTimeout() after 3 seconds");
}, 3000);


//setInterval  and clearInterval 


let counter = 0;
const intervalId = setInterval(() => {
    console.log("Counter:", counter);
    counter++;
    if (counter === 5) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);



