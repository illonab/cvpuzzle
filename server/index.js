require("dotenv").config();

const express = require("express");
const cors = require("cors");
require("./passport");
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();
const PORT = process.env.PORT || 8080;
const cvs = require("./routes/cvs");

app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["dsaklh32hkjhfid7879ds/?$"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.use("/cvs", cvs);

app.get("/", (_req, res) => {
  res.send("<h1>CvPuzzle Server!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
