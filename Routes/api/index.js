const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoute = require("./google");

// Book routes
router.use("/books", bookRoutes);

// Google route
router.use("/google", googleRoute);

module.exports = router;