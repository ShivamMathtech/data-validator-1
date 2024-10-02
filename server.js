const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
require("dotenv").config();
// app.use((req, res, next) => {
//   if (req.method === "POST") {
//     next();
//   } else {
//     res.status(400).send(`${req.method} is not allowed`);
//   }
// });
app.use(express.json());
app.post("/shivam", body("emailaddr").isEmail(), (req, res) => {
  //   res.status(200).json({
  //     Email: req.body.mail,
  //   });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
