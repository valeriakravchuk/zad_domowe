const express = require('express');
const taskController = require("../controllers/task")
const router = express.Router();

router.post("/",taskController.add);
router.patch("/", taskController.update);
router.put("/",taskController.finishTask);

module.exports = router;