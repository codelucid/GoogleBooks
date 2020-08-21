const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, default: "" },
  description: { type: String, default: "" },
  thumbnail: { type: String, default: "" },
  href: { type: String, default: "", unique: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;