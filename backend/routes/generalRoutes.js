const { Router } = require("express");
const authController = require("../controllers/authController");
// const requireAuth = require("../middleware/requireAuth");
const router = Router();


router.get("/mpesago", authController.general_report_get_all);



// router.get("/:id", authController.single_get_workOut);

// router.post("/", authController.workOut_post);

// router.delete("/:id", authController.workOut_delete);

// router.patch("/:id", authController.workOut_update);
module.exports = router;
