const express = require("express");
const router = express.Router();
const { authCheck, profileCheck,loginCheck,tokenVerifier } = require("../middlewares/auth");
const {
insertQuestion,fetchQuestion,randomQuizCreation
} = require("../controller/question");



//Route to Fetch Questions
router.post("/get-questions",fetchQuestion);


//Route to Fetch Questions
router.post("/create-random-quiz",randomQuizCreation);





// Route to create user
router.post("/upload-question", insertQuestion );


module.exports = router;
