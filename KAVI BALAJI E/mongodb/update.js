
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();

        const db=client.db('test')
        const collection=db.collection('products');

        const cursor=collection.find({});
        
        await collection.updateMany(
            { id: '77' }, 
            { $set: { title: 'coolglasses', price: 800 } } 
        );

        await cursor.forEach(record=>{
            console.log(record)
        })
        await client.close()
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();

