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
