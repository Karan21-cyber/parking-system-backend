const express = require("express");

const {addLocaiton,updateLocation,singleLocation, removeLocation, allLoaction} = require("../Controller/locationController");

const router = express.Router();

router.route("/").get(allLoaction);
router.route("/single/:id").get(singleLocation);
router.route("/addlocation").post(addLocaiton);
router.route("/update").put(updateLocation);
router.route("/remove/:id").delete(removeLocation);


module.exports = router;