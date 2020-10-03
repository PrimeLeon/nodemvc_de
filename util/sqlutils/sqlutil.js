const mysql = require('mysql');
const config = require("./config").config_local;

const pool = mysql.createPool(config);

function sqlconnection(sql, sqlarr = [], callback) {
    /**
     * @param {sql:string} 待执行的sql语句
     * @param {sqlarr:array} 可选的sql参数
     * @param {callback:function} 回调函数 (err,results)=>{}
     */
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            return;
        }
        connection.query(sql, sqlarr, callback);
        connection.release();
    });
};

module.exports = {
    sqlconnection
}