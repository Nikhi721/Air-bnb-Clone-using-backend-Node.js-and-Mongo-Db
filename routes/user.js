const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
// const User = require("../models/users.js");
const passport = require("passport");
const {savedRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/users.js");

router
.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

//router.get("/signup",userController.renderSignupForm);

//router.post("/signup",wrapAsync(userController.signup));

router
.route("/login")
.get(userController.renderLoginForm)
.post(savedRedirectUrl,passport.authenticate("local",{
   failureRedirect:"/login",
   failureFlash:true,
}),userController.login);

// router.post("/login",savedRedirectUrl,passport.authenticate("local",{
//    failureRedirect:"/login",
//    failureFlash:true,
// }),userController.login);

router.get("/logout",userController.logout);


module.exports = router;
