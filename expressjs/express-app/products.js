const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
 app.listen(4000, () => {
  console.log('Product app is running');
});
// Sample route
const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Mobile' },
];
mongoose.connect('mongodb://localhost:27017/mern')
app.get('/products', (req, res) => {
  res.json(products)
})
app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  products.json(newProduct);
});
// app.get('/products/:id', (req, res) => {
//   const id = req.params.id;
//   res.json({ id, name: 'Sample product' });
// }       
// );
module.exports = app;
