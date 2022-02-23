const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

// cors middleware
app.use(cors())
app.options('*', cors())

// POST middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET API
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// POST API
app.post("/test", cors(), (req, res, next) => {
  console.log(req.body);
  const testObj = {
    posts: 456,
    comment_karma: 3942
  }

  res.json({user: testObj});
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});