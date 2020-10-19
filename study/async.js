const mysql = require('mysql');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '7v8$016qqjn^dda4',
    database: 'express_hellow',
    port: 3306
});

let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

async function selectAllData() {
    let sql = 'SELECT * FROM user'
    let dataList = await query(sql);
    return dataList;
}

async function getData() {
    let dataList = await selectAllData();
}


module.exports = {
    query
}