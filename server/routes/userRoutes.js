const { allUsersRoute } = require("../../public/src/utils/APIroutes");
const {
  register,
  setAvatar,
  login,
  getAllUsers,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allUsers/:id", getAllUsers);

module.exports = router;
