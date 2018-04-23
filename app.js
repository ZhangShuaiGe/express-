var express = require('express');
var app = express();
var config = require("./config/settings");

// dev 费鱼接口地址
global.feiyuApi = "https://devy.91feiyu.com/m";

// dev 忙猫接口地址
   // 端文本地ip
/* global.mangmaoApi = "http://192.168.1.11:9093/mangcat"; */
global.mangmaoApi = "http://192.168.1.11:9093";

// cookie session 配置
config.cookieParser(app);
config.session(app);

// post 请求
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// 模板配置
var handlebars  = require('express-handlebars');
app.engine('html', handlebars({
    layoutsDir: 'views',
    defaultLayout: 'layout/layout',
    extname: '.html'
}));
app.set('view engine', 'html');

// 静态资源配置
app.use(express.static('static'));

// 路由配置
var mangmao = require("./router/mangMaoRouter");
var feiyu = require("./router/feiYuRouter");
app.use("/mangmao",mangmao);
app.use("/feiyu",feiyu);

//启动日志服务
config.logger();

app.listen(3389,function(err) {
    if (err) {
        logger.error(err);
    }
	console.log("http://127.0.0.1:3389");
    logger.info("服务启动监听端口：3389");
});