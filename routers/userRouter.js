const express = require("express");
const router = express.Router();

// POST /users/login 登录操作
router.post("/login", (req, res) => {
  // 获取页面传递过来的参数
  console.log(req.body);
  res.send("登录操作");
});

module.exports = router;
