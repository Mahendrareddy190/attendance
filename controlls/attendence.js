const Attendence = require("../models/attendence");

exports.attendence = (req, res, next, Id) => {
  Attendence.findById(Id).exec((err, atten) => {
    if (err) {
      return res.status(400).json({
        error: "cant save into data base ",
      });
    }
    req.Attendence = atten;
    next();
  });
};

exports.match = (req, res) => {
  let Attenden = req.body;
  let mahi = Attenden.value.date;
  Attendence.findOne({ date: mahi }).exec((err, result) => {
    if (err) {
       return res.status(400).json({
         error: "cant get attendence"
       })
    } else {
        res.json({message:"successfuly feached",result})
    }
  });
};

exports.addAttendence = (req, res) => {
  names = req.body;
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  newdate = year + "-" + month + "-" + day;
  let attend = new Attendence({
    names: names,
    date: newdate,
  });
  attend.save((err, attende) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "cant  crate into data base ",
      });
    }
    res.json({ message: "successfuly created", attende });
  });
};

exports.AllAttendence = (req, res) => {
  Attendence.find().exec((err, atten) => {
    if (err) {
      return res.status(400).json({
        error: " cant get all ",
      });
    }
    res.json(atten);
  });
};

exports.SingleAttendence = (req, res) => {
  return res.json(req.Attendence);
};

exports.deleteAttendence = (req, res) => {
  let att = req.Attendence;
  att.remove((err, student) => {
    if (err) {
      return res.status(400).json({
        error: "cant delete Attendence",
      });
    }
    res.json({ message: "successfully deleted", student });
  });
};
