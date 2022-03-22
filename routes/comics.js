const { Router } = require("express");
const { getListComics, getComicDetail } = require("../controllers/comics");
const router = Router();

router.get("/list", getListComics);
router.post("/detail", getComicDetail);

module.exports = router;
