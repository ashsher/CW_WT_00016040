const express = require("express");
const { validationResult } = require("express-validator");
const { registerValidationRules } = require("../../../validations/user");

// defining the routes themselves
const router = express.Router();
const user_controller = require("../../../controllers/api/");

// defining API routes
router.post("/register", registerValidationRules(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    user_controller.register(req, res);
});

module.exports = router;