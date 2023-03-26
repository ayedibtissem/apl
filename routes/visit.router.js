
const express = require("express");
const router = express.Router();

const visitController = require("../controllers/visit.controller");
const auth = require("../middelware/auth");


router.post("/", visitController.createVisit,auth);
router.get("/", visitController.getVisits);

router.get("/:id",visitController.getVisits)
module.exports = router;
