var express = require('express');
var router = express.Router();
// 忙猫的接
var http = require("../module/mangMao/http");

router.get("*",function (req,res) {
    res.render("mangMao/index",{
            "layout": ""
    });
});

// 这个login 放java的 登录接口地址
// router.post("/login",apiUrl,function (req,res) {
//     http(req, res ,function (data) {
//         req.session.token = data.resultdata.TOKEN;
//         // 删除token 隐藏ajax 数据中的 token
//         data.resultdata.TOKEN = "保密";
//         res.json(data);
//     });
// });

router.post("*",function (req,res) {
    http(req,res);
});
module.exports = router;