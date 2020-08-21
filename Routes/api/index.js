const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
// matches with "localhost:3001/api/books"
router.use("/books", bookRoutes);

module.exports = router;