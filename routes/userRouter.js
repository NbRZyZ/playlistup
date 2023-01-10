const express = require("express");
const { userController } = require("../controllers");

const router = express.Router();

router
  .post("/login", userControllerloginUser)
  .get("/users", userControllergetUsers)
  .get("/users/:id", userControllergetUser)
  .post("/users", userControllercreateUser)
  .put("/users/:id", () => {})
  .delete("/users/:id", () => {});

exports.userRoutes = router;
