var request = require("request");
module.exports = function (req,res,cb) {
    // 费鱼接口
    var apiUrl = global.feiyuApi + req.url;

    logger.info("费鱼~访问的接口名：" + apiUrl);
    logger.info("费鱼~给java传递的数据：" + JSON.stringify(req.body));
    request.post({
        "url": apiUrl,
        "form": req.body
    }, function (err, response, body) {
        if(err){
            logger.error("err=========：" + err);
        }else if(response.statusCode == 404){
            logger.info("接口访问失败~状态404~:" + apiUrl);
            res.json({"resultCode": 0, "resultMsg":"请求失败，请稍后再试 -n"});
        }
        logger.info("java返回的数据：" + body);
        if (body) {
            var data = JSON.parse(body);
            if(cb && typeof cb === "function"){
                cb(JSON.parse(body));
            } else {
                res.json(data);
            }
        } else {
            res.json({"resultCode": "0", "resultMsg": "接口返回数据为空:" + apiUrl});
        }
    });
};