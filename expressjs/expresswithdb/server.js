// ...existing code...
const express = require('express');
const { ObjectId } = require('mongodb');
const connectDB = require('./db');
// ...existing code...
const cors = require('cors');

const app = express();
app.use(cors({origin: '*',methods: ['GET','POST','PUT','DELETE'],allowedHeaders: ['Content-Type','Authorization'] }));
app.use(express.json());
app.get('/', async (req, res) => {
    res.send('Hello World!');
})
app.get('/students', async (req, res) => {
    try { 
        const db = await connectDB();
        const students = await db.collection('students').find().toArray();
        res.json(students);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 600');
});
// ...existing code...
