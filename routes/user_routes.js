const { signup_controller, login_controller, update_user } = require("../controllers/user_controller");
const { checkUserEmail, checkUsername } = require("../middleware/signup_middleware");

const router = require("express").Router();

router.post("/signup",checkUserEmail, checkUsername, signup_controller)
router.post("/login", login_controller)
router.put("/", update_user)

module.exports = router;