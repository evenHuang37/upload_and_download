var mysql = require('mysql');

var connection  = mysql.createConnection({  
  
   host:'localhost',  
   user:'root',//�˺�  
   password:'123456',//����  
   database:'homework' //���ݿ�����  
  
});  
connection.connect();  
  
//��ѯ����  
function query(sql,callback){  
  
  
        connection.query(sql, function(err, rows, fields) {  
            if (err) throw err;  
             callback(rows);  
               
      });  
    //connection.end();  
}  
exports.query = query;  