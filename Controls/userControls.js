//CRUD OPERATION
//GET----Fetch
const mongModel = require('../Models/userModel')

const fetchData = (req, res, next) => {
  mongModel.find({}).exec((err, result) => {
    if (err) res.json({ status: false, message: "unable to fetch the data" });
    else
      res.json({
        status: true,
        message: "user details fetch successfully",
        data: result,
      });
  });
};
//POST----Update
const createData = (req, res, next) => {
  let data = new mongModel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    date_of_birth: req.body.date_of_birth,
    address: req.body.address,
    pincode: req.body.pincode,
  });
  data.save()
  .then(result =>{
    res.json({
        data:result,
        message:"added"
    })
  })
  .catch(fail =>{
    res.json({
        error:fail,
        message:"Error..!"
    })
  })
//   data.save((err, result) => {
//     if (err) {
//       return res.send(err);
//     }
//     else
//      res.json({ data: result });
//   });
};

//PUT----Update
const updateData = (req, res, next) => {
  mongModel
    .findOneAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .exec((err, result) => {
      if (err) res.json({ status: false, message: "unable to fetch the data" });
      else
        res.json({
          status: true,
          message: "user details fetch successfully",
          data: result,
        });
    });
};
//DELETE-----Remove
const removeData = (req, res, next) => {
  mongModel
    .findOneAndDelete({ _id: req.params.id }, { new: true })
    .exec((err, result) => {
      // mongModel.findByIdAndDelete({_id:req.params.id}, { new: true }).exec((err, result) => {
      if (err)
        res.json({ status: false, message: "unable to delete the data" });
      else
        res.json({
          status: true,
          message: "user details deleted successfully",
          data: result,
        });
    });
};

module.exports = { fetchData, createData, updateData, removeData };