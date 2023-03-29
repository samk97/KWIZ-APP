const express = require("express");
const router = express.Router();
const { authCheck, profileCheck,loginCheck,tokenVerifier } = require("../middlewares/auth");
const {
insertQuestion,fetchQuestion
} = require("../controller/question");



//Route to Fetch Questions
router.post("/get-questions",fetchQuestion);




// Route to create user
router.post("/upload-question", insertQuestion );

// Route to delete account
// router.post("/update-question",tokenVerifier, deleteAccount);


// // Forgot Password API
// router.post("/delete-question",authCheck,forgotPassword)

module.exports = router;
