// 引入连接了MongoDB的monoose
const mongoose = require("../connect");

// 定义 schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },

  avatar: {
    type: String,
    default: "http://localhost:3000/assets/img/avatar.png"
  }
});

// 生成 model
const UserModel = mongoose.model("user", userSchema);

// 暴露
module.exports = UserModel;
