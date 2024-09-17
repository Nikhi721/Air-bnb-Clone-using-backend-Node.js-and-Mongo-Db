const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
// const Review = require("../models/review.js");
// const Listing = require("../models/listing.js");
const {ValidateReview, isLoggedIn,isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");



// review post
router.post("/",
    isLoggedIn, 
    ValidateReview,
    wrapAsync(reviewController.createReview));

//Delete route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview));

module.exports = router;