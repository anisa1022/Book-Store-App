import mongoose ,{mongoose} from "mongoose";

const cartSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true,
        unique:true, // Ensure a user has only one cart
    },
    items:[
        {
            bookId:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'Book',
                required:true
            },
            quantity:{
                type:Number,
                required:true,
                min:1
            },
        }
    ]
},{
    timestamps: true
});

const Cart = mongoose.model('cart',cartSchema);

export default Cart;
