const express = require("express");
const { allSpaces, singleSpaces, groupSpaces, addSpace, updateSpace, removeSpace } = require("../Controller/spaceController");
const router = express.Router();

router.route("/").get(allSpaces);
router.route("/single/:id").get(singleSpaces);
router.route("/group/:id").get(groupSpaces);
router.route("/addspace").post(addSpace);
router.route("/update").put(updateSpace);
router.route("/remove/:id").delete(removeSpace);

module.exports = router;