const mongoose = require("mongoose");

// define mongoose connection:
mongoose
  .connect("mongodb://127.0.0.1/mongo-exercises")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

// define Schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
      type: Date,
      default: Date.now,
    },
    isPublished: Boolean,
    price: Number,
  });
  
  // define Model

