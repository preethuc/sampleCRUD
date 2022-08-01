const express = require("express");
const router = express.Router();

const userControl = require("../Controls/userControls");
// router.get("/", userControl.fetchData);
router.get("/fetch", userControl.fetchData);
router.post("/create", userControl.createData);
router.put("/update", userControl.updateData);
router.delete("/remove", userControl.removeData);

module.exports = router;
