const express = require("express");
const router = express.Router();
const { authCheck, profileCheck,loginCheck,tokenVerifier } = require("../middlewares/auth");
const {
fetchLeaderBoard
} = require("../controller/quiz");



//Route to Fetch LeaderBoard
router.post("/get-leaderboard",fetchLeaderBoard);





module.exports = router;
