const express = require("express");
const { allPayments, addPayment, singlePayment, userReport } = require("../Controller/paymentController");
const router = express.Router();

router.route("/").get(allPayments);
router.route("/addpayment").post(addPayment);
router.route("/single/:id").get(singlePayment);
router.route("/report/:uid").get(userReport);

module.exports = router;