const express = require("express");
const {
  getStudentId,
  createStudent,
  getStudent,
  getallstudent,
  deleteStudent,
} = require("../controlls/student_li");
const router = express.Router();

router.param("studentId", getStudentId);
router.post("/create", createStudent);
router.get("/get/:studentId", getStudent);
router.get("/getall", getallstudent);
router.delete("/delete/:studentId", deleteStudent);
router.get("/gets", (req, res) => {
  res.send({ name: "mahi" });
module.exports = router;
