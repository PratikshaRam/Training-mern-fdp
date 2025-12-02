const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  try {
    const { items } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Items are required" });
    }
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const order = await Order.create({
      customer: req.user._id,
      items: items.map((i) => ({
        product: i.productId,
        qty: i.qty,
        price: i.price,
      })),
      total,
    });
    res.status(201).json({ message: "Order placed", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to place order" });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.user._id })
      .populate("items.product", "name price")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
