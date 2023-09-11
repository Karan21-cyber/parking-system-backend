const express = require("express");
const { allReserves, addReserve, removeReserve, groupReseve, singleReserves } = require("../Controller/reserveController");
const router = express.Router();


router.route("/").get(allReserves);
router.route("/addreserve").post(addReserve);
router.route("/remove/:id").delete(removeReserve);
router.route("/groupfetch").get(groupReseve);
router.route("/singlefetch").get(singleReserves);


module.exports = router;