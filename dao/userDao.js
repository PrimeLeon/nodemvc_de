const sqlutil = require('../util/sqlutils/sqlutil.js');
const moment = require('moment');

const vip_expire_date = "2000-01-01 00:00:00";

let meID = 0000000001;

/**
 * @param {string} username 用户注册的名称
 * @param {string} password 经过md5摘要的密码密文
 * @param {string} regis_date 用户注册的时间字符串 如(2200-10-02 22:22:22)
 */
function addUser(username, password) {
    let sql = 'INSERT INTO user (username,password,regis_date) VALUES (?,?,?)';
    let regis_date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    let sqlres = [username, password, regis_date];
    sqlutil.sqlconnection(sql, sqlarr, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        sqlres = result;
    });
    return sqlres;
}
/**
 * @param {number} id 根据id查询用户，id为number类型
 */
function getUserById(id) {
    let sql = 'SELECT * FROM user WHERE id = ?';
    let sqlres = [id];
    sqlutil.sqlconnection(sql, sqlarr, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        sqlres = result;
    });
    return sqlres;
}
/**
 * 获取所有用户
 */
function getAllUsers() {
    let sql = `SELECT * FROM user`;
    let sqlres;
    sqlutil.sqlconnection(sql, sqlarr, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        sqlres = result;
    });
    return sqlres;
}
/**
 * 
 * @param {string} username 用户要更新的用户名
 * @param {string} phone 用户要更新的手机号
 * @param {string} email 用户要更新的email地址
 * @param {number} id 待更新的用户id
 */
function updateUserById(username, phone, email, id) {
    /**
     * TODO:如果没有返回值
     */
    let sql = `UPDATE user SET username = ?, phone = ?, email = ? WHERE id = ?`;
    let sqlarr = [username, phone, email, id];
    sqlutil.sqlconnection(sql, sqlarr, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    });
    return;
}

updateUserById('Leon', '18875146676', 'yunhanisamiracal@gmail.com', meID);

module.exports = {

}