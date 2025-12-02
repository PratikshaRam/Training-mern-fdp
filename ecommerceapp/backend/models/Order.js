const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({}
    customer: {
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',required: true },
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product'},
                qty: { type: Number, default: 1 },
                Price: { type: Number, required: true }
            },

        ],
        total: { type: Number, required: true },
        status: {
            type: String,
            enum: ['placed', 'processing', 'completed', 'cancelled'],
            default: 'placed' }
    },
    { timestamps: true }
    );
    module.exports = mongoose.model('Order', orderSchema);