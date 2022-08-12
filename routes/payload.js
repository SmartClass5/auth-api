const express = require("express");

const router = express.Router();
const PayloadController = require('../controller/payload');
const { validateToken } = require("../middlewares/AuthMiddleware");
// POST /tweeets
router.get('/', validateToken, PayloadController.form);

module.exports = router;