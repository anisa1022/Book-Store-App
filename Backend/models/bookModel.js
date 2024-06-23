import mongoose , { Mongoose } from "mongoose";

const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    
    },
    author:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    tags: {
        type: [String], // An array of strings to store tags associated with the book.
        required: true,
        default: []
    },
    
}
, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});


  
  const Book = mongoose.model('Book', bookSchema);
  
export default  Book;