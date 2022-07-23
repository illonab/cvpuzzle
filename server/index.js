require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("<h1>Cvpuzzle Server!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
