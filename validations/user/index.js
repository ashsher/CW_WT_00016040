const { body } = require("express-validator");

// creating different types of validations for each input of the registration form
const registerValidationRules = () => {
    return [
        body("ownerName").notEmpty().withMessage("Full Name of Car Owner cannot be empty"),
        body("ownerPhone").notEmpty().withMessage("There should be phone number"),
        body("ownerLocation").notEmpty().withMessage("Just write where the owner is from"),
        body("carModel").notEmpty().withMessage("What is the model of Car? (e.g. Chevrolet Nexia 2)"),
        body("carYear").notEmpty().withMessage("When was this car produced"),
        body("transmission").notEmpty().withMessage("What is the transmission"),
        body("carPrice").notEmpty().withMessage("You missed the most important part!"),
    ];
};

// exporting the validations
module.exports = {
    registerValidationRules,
};