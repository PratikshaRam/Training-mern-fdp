const express = require('express');
const app = express();
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
}); 
app.post('/add', (req, res) => {
    const {name,mobile}    = req.body;
    console.log(name,mobile);
    // res.send(req.body);
    res.send("hello"+name+"\n your mobile number is "+mobile);
});
app.get('/student-info', (req, res) => {
    res.json({ id:78, name:"pratiksha1",mobile:9876543210 });
});
module.exports = app;