var requestHandlers=require("./requestHandlers");
var express = require('express');
var app = express();
const fs = require("fs");
 
app.get('/', requestHandlers.start);
app.get('/uploadpage', requestHandlers.uploadpage);
app.get('/home', requestHandlers.home);
app.get('/images/logo.png', requestHandlers.img_logo);  
app.get('/images/sch.png', requestHandlers.img_sch);   
app.get('/images/banner.jpg', requestHandlers.img_banner);
app.get('/images/pic04.jpg', requestHandlers.img_pic04);
app.get('/images/pic05.jpg', requestHandlers.img_pic05);
app.get('/js/skel-panels.min.js', requestHandlers.js_skelpanels);
app.get('/js/skel.min.js', requestHandlers.js_skel);
app.get('/js/init.js', requestHandlers.js_init);
app.get('/css/app.v2.css', requestHandlers.css_app);
app.get('/css/login.css', requestHandlers.css_login); 
app.get('/css/style.css', requestHandlers.css_style); 
app.get('/css/style-desktop.css', requestHandlers.css_styledesktop); 
app.get('/modify', requestHandlers.modify);
app.post('/change', requestHandlers.change);


app.post('/upload', requestHandlers.upload); 
app.post('/login', requestHandlers.login);  
app.get('/download/:fileName',requestHandlers.download); 
 
app.set("viewengine",'ejs');
//设置模板目录为当前index.js目录同级views目录下的模板
app.set("views",__dirname);
//设置使用当前目录
app.use(express.static(__dirname));
app.get('/showfiles',requestHandlers.showfiles);
  

//app.post('/upload', requestHandlers.upload); 
 
var server = app.listen(8888, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("start! IP: http://%s:%s", host, port)
 
})




