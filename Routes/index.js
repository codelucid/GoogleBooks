const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const booksController = require("../controllers/booksController");

// API Routes
// matches with "localhost:3001/api"
router.use("/api", apiRoutes);
// router.get("/api/books", booksController.findAll);
// router.post("/api/books", booksController.create);
// router.get("/api/books/:id", booksController.findById);
// router.delete("/api/books/:id", booksController.remove);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;