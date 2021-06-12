const express = require("express");
const router = express.Router();
const {
  attendence,
  addAttendence,
  SingleAttendence,
  AllAttendence,
  deleteAttendence,
  match
} = require("../controlls/attendence");

router.param("attendenceId", attendence);
router.post("/created", addAttendence);
router.post("/match", match);
router.get("/get/:attendenceId", SingleAttendence);
router.get("/getalls", AllAttendence);
router.delete("/delete/:attendenceId", deleteAttendence);

module.exports = router;
