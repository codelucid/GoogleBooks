const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [{ type: String, default: "" }],
  synopsis: { type: String, default: "" },
  thumbnail: { type: String, default: "" },
  link: { type: String, default: "" }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;