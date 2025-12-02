// ...existing code...
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'mern';
let isConnected = false;

async function connectDB() {
  try {
    if (!isConnected) {
      await client.connect();
      isConnected = true;
      console.log('connected to mongodb');
    }
    return client.db(dbName);
  } catch (err) {
    console.error('MongoDB connection error', err);
    throw err;
  }
}

module.exports = connectDB;
// ...existing code...