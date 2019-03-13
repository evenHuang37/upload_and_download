var formidable = require('formidable');
var fs = require('fs');  //node.js核心的文件处理模块
const path = require('path'); 
var usernumber="none";

//login.html
function start(request,response) {
  console.log("Request handler 'start' was called.");

  fs.readFile("./login.html", function (err, html) {
    if (err) {
        throw err; 
    }       
    else {
        response.writeHead(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }
	});
}

//uploadpage.html
function uploadpage(request,response) {
  console.log("Request handler 'start' was called.");

  fs.readFile("./uploadpage.html", function (err, html) {
    if (err) {
        throw err; 
    }       
    else {
        response.writeHead(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }
	});
}

//modify.html
function modify(request,response) {
  console.log("Request handler 'start' was called.");

  fs.readFile("./modify.html", function (err, html) {
    if (err) {
        throw err; 
    }       
    else {
        response.writeHead(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }
	});
}

//app.v2.css
function css_app(request,response){
	fs.readFile("./css/app.v2.css", function (err, css) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/css"});  
       response.write(css);  
        response.end();  
    }
	});
}

//login.css
function css_login(request,response){
	fs.readFile("./css/login.css", function (err, css) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/css"});  
       response.write(css);  
        response.end();  
    }
	});
}

//style.css
function css_style(request,response){
	fs.readFile("./css/style.css", function (err, css) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/css"});  
       response.write(css);  
        response.end();  
    }
	});
}

//style-desktop.css
function css_styledesktop(request,response){
	fs.readFile("./css/style-desktop.css", function (err, css) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/css"});  
       response.write(css);  
        response.end();  
    }
	});
}

//init.js
function js_init(request,response){
	fs.readFile("./js/init.js", function (err, js) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/js"});  
       response.write(js);  
        response.end();  
    }
	});
}


//skel-panels.min.js
function js_skelpanels(request,response){
	fs.readFile("./js/skel-panels.min.js", function (err, js) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/js"});  
       response.write(js);  
        response.end();  
    }
	});
}

//skel.min.js
function js_skel(request,response){
	fs.readFile("./js/skel.min.js", function (err, js) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/js"});  
       response.write(js);  
        response.end();  
    }
	});
}

//sch.png
function img_sch(request,response){
	fs.readFile("./images/sch.png", function (err,file) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/plain"});  
       response.write(file);  
        response.end();  
    }
	});
}

//logo.png
function img_logo(request,response){
	fs.readFile("./images/logo.png", function (err,file) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/plain"});  
       response.write(file);  
        response.end();  
    }
	});
}

//banner.jpg
function img_banner(request,response){
	fs.readFile("./images/banner.jpg", function (err,file) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/plain"});  
       response.write(file);  
        response.end();  
    }
	});
}

//pic04.jpg
function img_pic04(request,response){
	fs.readFile("./images/pic04.jpg", function (err,file) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/plain"});  
       response.write(file);  
        response.end();  
    }
	});
}

//pic05.jpg
function img_pic05(request,response){
	fs.readFile("./images/pic05.jpg", function (err,file) {
   if (err) {
        throw err; 
   }       
   else {
        response.writeHeader(200, {"Content-Type": "text/plain"});  
       response.write(file);  
        response.end();  
    }
	});
}

//登录
function login(request,response){
  console.log("Request 'login' was called.");
  var form = new formidable.IncomingForm(); 
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
	 console.log('fields',fields);//表单传递的input数据  
    newpath=fields.number+'_'+fields.password; 
     console.log(newpath);
    usernumber=fields.number;
    var mysql = require('./mysql');   
    var sql = "SELECT * FROM user WHERE number = '"+fields.number+"' AND password = '"+fields.password+"'";  
    mysql.query(sql,function(result){ 
	 console.log(result);
	console.log("here");
            showpage(request,response,result);  
    });  	 
	
  });
}

//验证登录
function showpage(request,response,result){  
        console.log("function 'showpage' was called.");        
        console.log(result);		
        if(result != ''){  
              
           home(request, response);
                
        }else{              
            var str = "<h1>密码错误！登录失败</h1>";  
                str+="<a href='./'>返回登录</a>";  
			response.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
			response.write(str);   
            response.end(); 	
        }     
          
}  

//上传
function upload(request,response ) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  form.uploadDir = "./homework/";//设置上传文件的保存位置
  
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
	 console.log('fields',fields);//表单传递的input数据  
     var filename = files.upload.name;	 
    console.log(filename);
	 // 得到文件类型
      var nameArray = filename.split('.');
      var type = nameArray[nameArray.length-1];
      console.log(type);	 
    newpath='./homework/'+fields.number+'_'+fields.name+'.'+type; 
     console.log(newpath);	
	fs.renameSync(files.upload.path, newpath);//文件重命名
	showfiles(request,response);
   // response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});//注意输出类型
   // response.write("received image:<br/>");
    //response.write("<a href="+newpath+">"+newpath+"</a><br>");
	//response.write("<a href='/download'>"+newpath+"</a>");
   // response.end();
  });
}

// 显示服务器文件 
function showfiles(request, response) { 
 // 文件目录
 console.log("function showfiles was called");
 var filePath = path.join(__dirname, './homework');
 fs.readdir(filePath, function(err, results){
  if(err) throw err;
  if(results.length>0) {
   var files = [];
   results.forEach(function(file){
   if(fs.statSync(path.join(filePath, file)).isFile()){
     files.push(file);
   }
   })
   response.render('downloadpage.ejs', {files:files});
  } else {
   response.end('当前目录下没有文件');
  }
 });
};

// 展示个人信息home.ejs 
function home(request, response) { 
 // 文件目录
   console.log("function home was called");
   console.log(usernumber);
  var mysql = require('./mysql');   
    var sql = "SELECT * FROM user WHERE number = '"+usernumber+"'";  
    mysql.query(sql,function(result){ 
	 console.log(result);
	console.log("home");
            show(request,response,result);  
    });  	 
 
};

function show(request,response,result){  
        console.log("function 'show' was called.");        
        console.log(result);
              				
       response.render('home.ejs', {result:result});
}  

//修改密码
function change(request,response ) {
  console.log("Request handler 'change' was called.");
  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
	 console.log('fields',fields);//表单传递的input数据  
     var password=fields.password;
    console.log(password);
	 var mysql = require('./mysql');  
    //UPDATE node_user SET name = ?,age = ? WHERE id = ?	 
    var sql = "UPDATE user SET password='"+password+"' WHERE number='"+usernumber+"'";  
    mysql.query(sql,function(result){ 
	 console.log(result);
	console.log("changed!");
             
    });  
	home(request, response); 
	
  
  });
}


//下载
function download(request,response, next) {
 // 实现文件下载 
   var fileName = request.params.fileName;
   var filePath = __dirname+"/homework/"+fileName;
   console.log(filePath);
   response.download(filePath); 
};


exports.start=start;
exports.uploadpage=uploadpage;
exports.css_app=css_app;
exports.css_login=css_login;
exports.css_style=css_style;
exports.css_styledesktop=css_styledesktop;
exports.js_init=js_init;
exports.js_skelpanels=js_skelpanels;
exports.js_skel=js_skel;
exports.img_logo=img_logo;
exports.img_sch=img_sch;
exports.img_banner=img_banner
exports.img_pic04=img_pic04;
exports.img_pic05=img_pic05;
exports.login=login;
exports.upload=upload;
exports.download=download;
exports.showfiles=showfiles;
exports.home=home;
exports.modify=modify;
exports.change=change;




