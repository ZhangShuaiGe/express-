var express = require('express');
var router = express.Router();

// 登录接口地址
var apiLogin = require("../module/feiYu/apiLogin");

// 费鱼接口
var http = require("../module/feiYu/http");

router.get("*",function (req,res) {
    res.render("feiyu/index",{
        "layout": ""
    });
});

router.post("/personal/personalLogin",apiLogin,function (req,res) {
    http(req, res ,function (data) {
        req.session.token = data.resultdata.TOKEN;
        // 删除token 隐藏ajax 数据中的 token
        data.resultdata.TOKEN = "保密";
        res.json(data);
    });
});

// router.post("/empfeiyu/login",function (req,res) {
//     console.log(123123123);
//     res.json(1);
// });

router.post("*",function (req,res) {
    http(req,res);
});

module.exports = router;