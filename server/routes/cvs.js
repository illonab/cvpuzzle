const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const cvIntialState = require("./cvInitialState");
const { storeCv, addCVToUser, getCv, getCVsForUser } = require("../database");
const puppeteer = require("puppeteer");

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

router.get("/print/:id", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`http://localhost:3000/cvtoprint/${req.params.id}`, {
    waitUntil: "networkidle2",
  });

  const pdf = await page.pdf({
    format: "A4",
    displayHeaderFooter: false,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
    printBackground: true,
  });

  res.on("finish", function () {
    browser.close();
  });

  res.contentType("application/pdf");
  res.setHeader("Content-disposition", "attachment; filename=cvpuzzle.pdf");
  res.send(pdf);
});

module.exports = router;
