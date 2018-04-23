// 登录接口是另外一套 独立的接口
module.exports = function (req,res,next) {
    var api = "";
    // 容错处理
    if(!req.body.env){
        req.body.env = "prd";
    }
    // req.url 默认是 带 / 回来的
    switch (req.body.env){
        case "prd":
            api = "http://fd-web.com/fd" + req.url;
            break;
        case "dev":
            api = "http://192.168.1.246:10003/fd" + req.url;
            break;
        case "ci":
            api = "http://cifd-web.com/fd" + req.url;
            break;
            // 本地启动node
        case "localhost":
            api = "http://192.168.1.246:10003/fd" + req.url;
            break;
    }
    // 接口地址
    global.apiUrl = api;
    next();
};