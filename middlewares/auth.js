module.exports = (req, res, next) => {
  // 判断是否登录了
  if (req.session.auth) {
    // 登录了，直接走后续的流程代码
    req.auth = req.session.auth;

    next();
  } else {
    // 没登录，直接打回到登录页面
    res.redirect("/login");
  }
};
