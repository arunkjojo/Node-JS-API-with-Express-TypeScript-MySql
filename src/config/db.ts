const mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    port: 3306
});

connection.connect((error: Error) => {
    if(error){
        throw error
    }else{
        console.log("MySQL Database is connect Successfully")
    }
})

module.exports = connection