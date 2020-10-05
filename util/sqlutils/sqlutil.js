const mysql = require('mysql');
const config = require("./config").config_local;

const pool = mysql.createPool(config);

/**
 * @brief 封装的获取连接执行sql的函数
 * @param {string} sql 待执行的sql语句
 * @param {array[any]} sqlarr 可选的sql参数
 * @param {function} callback 回调函数
 * @example callback (err,result) => { ..do something }
 */
function sqlconnection(sql, sqlarr = [], callback) {
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