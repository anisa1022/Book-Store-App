import mongoose from "mongoose";
import MimeNode from "nodemailer/lib/mime-node";

const orderSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items:[
        {
            bookId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Book',
                required:true
            },
            quantitiy:{
                type:Number,
                required:true,
                min:1
            },
            price:{
                type: Number,
                required: true,
                min:0
            }

        }
    ],
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    shippingAddress: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['Credit Card', 'EVC Plus', 'eDahab']
    },
    paymentStatus: {
        type: String,
        required: true,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Pending'
    }

},{
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Order = mongoose.model('Order', orderSchema);

export default Order