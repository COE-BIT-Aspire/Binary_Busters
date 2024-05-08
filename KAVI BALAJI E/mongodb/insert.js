
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
        const ackresult= await collection.insertOne({
            id: 115,
  title: 'cargo lashing Belt',
  price: 90,
  quantity: 1,
  total: 90,
  discountPercentage: 7.67,
  discountedPrice: 76,
  thumbnail: 'https://cdn.dummyjson.com/product-images/95/thumbnail.jpg'


        })
        console.log("the record inserted into the colection with "+ ackresult.insertedId)
         const result = await collection.insertMany([
         { id: '67', title: 'large sale d two', price: 950, quantity: 3, total: 950, discountPercentage: 15.00, discountPrice: 399 },
         { id: '77', title: 'small scale d three', price: 1050, quantity: 4, total: 1050, discountPercentage: 20.00, discountPrice: 499 }
        ]);
         console.log("The new data ", ackresult.insertedId);



        
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

