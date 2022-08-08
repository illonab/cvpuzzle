const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const cvIntialState = require("./cvInitialState");
const { storeCv, addCVToUser, getCv, getCVsForUser } = require("../database");

router.get("/", async (req, res) => {
  const cvs = await getCVsForUser(req.user.id);
  res.send(cvs);
});

router.get("/:id", async (req, res) => {
  const cv = await getCv(req.params.id);
  res.send(cv);
});
router.post("/", (req, res) => {
  const id = uuidv4();
  storeCv(id, cvIntialState);
  addCVToUser(req.user.id, id);
  res.send(id);
});

router.put("/:id", async (req, res) => {
  const cv = req.body;
  const cvId = req.params.id;
  await storeCv(cvId, cv);
  res.send("Edited");
});

module.exports = router;
