const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, default: "" },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  link: { type: String, default: "", unique: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;