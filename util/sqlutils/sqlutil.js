const mysql = require('mysql');
const config = require("./config").config_local;

const pool = mysql.createPool(config);

/**
 * @brief 封装的获取连接、执行sql的函数
 * @param {string} sql 待执行的sql语句
 * @param {array[any]} sqlarr 可选的sql参数
 * @param {function} callback 回调函数
 * @example callback (err,result) => { ..do something }
 */
const sqlconnection = (sql, sqlarr = []) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                connection.query(sql, sqlarr, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }
            connection.release();
        });
    })
};

module.exports = {
    sqlconnection
}