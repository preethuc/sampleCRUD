// app.get("/", (req, res) => {
//   res.end("hello");
// });
// app.get("/api/courses", (req, res) => {
//   res.send([1, 2, 3]);
// });
//HTTP request -------req.params
// app.get("/api/posts/:year/:month", (req, res) => {
//   res.send(req.params);
// });
//HTTP request -----req.query
// app.get("/api/posts", (req, res) => {
//   res.send(req.query);
// });
//CRUD OPERATION
//GET Method---all in courses
// app.get("/api/courses", (req, res) => res.send(courses));
//GET ---- by id
// app.get("/api/courses/:id", (req, res) => {
//   const course = courses.find((c) => c.id === parseInt(req.params.id));
//   if (!course)
//     res.status(404).send("The course with the given Id is not found");
//   res.send(course);
// });
//POST method
//HTTP request----req.body
// app.post("/api/courses", (req, res) => {
//   const schema = {
//     name: Joi.string().min(3).required(),
//   };
//   const result = Joi.validate(req.body, schema);
//   console.log(result);
  // //manual valiadation logic
  // // if (!req.body.name || req.body.name.length < 5) {
  // //   //400 Bad Request
  // //  return res.status(400).send("Name is required and should be minimum 3 character");
  // // }
  // if (result.error) {
  //   res.status(400).send(result.error.message);
  //   //return;
  // }

  //validation---If invalid(400 error)

//PUT request
// app.put("/api/courses/:id", (req, res) => {
//   //Look up the course in GET mtd----if not existing,return 404
//   const course = courses.find((c) => c.id === parseInt(req.params.id));
//   if (!course)
//     res.status(404).send("The course with the given Id is not found");
//   //validation---If invalid(400 error)
//   const { error } = validateCourse(req.body);
//   if (error) return res.status(400).send(error.details[0].message);
//   //update course---return the updated course
//   course.name = req.body.name;
//   res.send(course);
// });
// function validateCourse(course) {
//   const schema = {
//     name: Joi.string().min(3).required(),
//   };
//   return Joi.validate(course, schema);
// }
// //DELETE request
// app.delete("/api/courses/:id", (req, res) => {
//   const course = courses.find((c) => c.id === parseInt(req.params.id));
//   if (!course)
//     res.status(404).send("The course with the given Id is not found");
//   //Delete
//   const index = courses.indexOf(course);
//   courses.splice(index, 2);
//   res.send(course);
// });
// //Environment Variables
// // const port = process.env.PORT || 3000;
// // console.dir(process.env);
// // app.listen(port, () => console.log(`Listening on port ${port} `));
// app.listen(3000, () => console.log("listening on the port 3000..... "));






//Schema
// const user = {
//   name: String,
//   email: String,
//   phone: Number,
//   age: Number,
//   date_of_birth: String,
//   address: String,
//   pincode: Number,
// };
// const mongModel = mongoose.model("NEWCOLS", user);
//GET
// app.get("/api/get",(req,res)=>{
//   mongModel.find({}).exec((err,result)=>{
//     if(err) res.json({status:false,message:'unable to fetch the data'})
//     else res.json({status:true,message:'user details fetch successfully',data:result})
//   })
// })
//POST
// app.post("/api/posts", (req, res) => {
//   const data = new mongModel({
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     age: req.body.age,
//     date_of_birth: req.body.date_of_birth,
//     address: req.body.address,
//     pincode: req.body.pincode,
//   });
//   data.save((err, result) => {
//     if (err) {
//       return res.send(err);
//     }
//     return res.json({ data: result });
//   });
// });
//PUT
// app.put("/api/posts/:id", (req, res) => {
//   mongModel
//     .findOneAndUpdate(req.params.id, { $set: req.body }, { new: true })
//     .exec((err, result) => {
//       if (err) res.json({ status: false, message: "unable to fetch the data" });
//       else
//         res.json({
//           status: true,
//           message: "user details fetch successfully",
//           data: result,
//         });
//     });
// });
//DELETE
// app.delete("/api/posts/:id", (req, res) => {
//   mongModel
//     .findOneAndDelete({ _id: req.params.id }, { new: true })
//     .exec((err, result) => {
//       // mongModel.findByIdAndDelete({_id:req.params.id}, { new: true }).exec((err, result) => {
//       if (err)
//         res.json({ status: false, message: "unable to delete the data" });
//       else
//         res.json({
//           status: true,
//           message: "user details deleted successfully",
//           data: result,
//         });
//     });
// });