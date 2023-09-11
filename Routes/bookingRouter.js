const express = require("express");
const { addbooking, singlebooking, fetchBooking, removeBooking } = require("../Controller/bookingController");

const router = express.Router();

router.route("/addbooking").post(addbooking);
router.route("/singlebooking").get(singlebooking);
router.route("/").get(fetchBooking);
router.route("/removebooking/:id").delete(removeBooking);

module.exports = router;