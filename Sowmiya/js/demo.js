
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

// Function to calculate total quantity of a specific item
function getTotalQuantity(itemName, items) {
    let totalQuantity = 0;
    for (const item of items) {
        if (item.item === itemName) {
            totalQuantity += item.quantity;
        }
    }
    return totalQuantity;
}

// Get the total quantity of "Chair" items in the inventory
const chairQuantity = getTotalQuantity("Chair", inventory);
console.log("Total Chair Quantity:", chairQuantity);






// Define a set to store unique employee IDs of those who attended a meeting
const meetingAttendees = new Set();

// Function to add an employee ID to the set of attendees
function markAttendance(employeeId) {
    meetingAttendees.add(employeeId);
}

// Function to check if an employee has attended the meeting
function hasAttended(employeeId) {
    return meetingAttendees.has(employeeId);
}

// Mark attendance for employees
markAttendance("emp123");
markAttendance("emp456");
markAttendance("emp123");

// Check if specific employees have attended the meeting
console.log("Employee with ID emp123 has attended the meeting:", hasAttended("emp123"));
console.log("Employee with ID emp789 has attended the meeting:", hasAttended("emp789"));



// Array of product objects
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 800 },
    { name: "Tablet", price: 300 },
    { name: "Headphones", price: 150 },
    { name: "Smartwatch", price: 250 },
];

// Function to filter products within a price range
const filterProductsByPriceRange = (products, minPrice, maxPrice) => {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
};

// Filter products between $200 and $500
const filteredProducts = filterProductsByPriceRange(products, 200, 500);

// Display filtered products
console.log("Products between $200 and $500:");
filteredProducts.forEach(product => console.log(`${product.name}: $${product.price}`));
