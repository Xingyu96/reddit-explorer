const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const profile = require('./profile')

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
  console.log(req.body)
  const username = req.body.username
  const testObj = {
    posts: 0,
    comment_karma: 0
  }
  
  profile.getProfile(username)
    .then(userProfile => profile.extractUserInfo(userProfile.data))
    .then((result) => {
      if (result.error) {
        res.json(result);
      } else {
        res.json({user: result});
      }
      next()
    })
    .catch((e) => {
      next(e)
    })
});

app.use((error, req, res, next) => {
  next(error)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});