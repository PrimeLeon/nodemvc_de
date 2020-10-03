const sqlutil = require('../util/sqlutils/sqlutil.js');
const moment = require('moment');

let meID = 0000000001;

/**
 * DAO层统一返回Promise对象
 * 由Controll层决定后续操作
 */

/**
 * @param {string} username 用户注册的名称
 * @param {string} password 经过md5摘要的密码密文
 * @param {string} regis_date 用户注册的时间字符串 如(2200-12-12 22:22:22)
 * @return {object} sqlres
 */
function addUser(username, password) {
    /**
     * 默认nickname为username
     * 默认is_activate为0
     */
    const vip_expire_date = "2000-01-01 00:00:00";
    let regis_date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    let nickname = username;
    let sql = 'INSERT INTO user (username,nickname,password,regis_date,vip_expire_date) VALUES (?,?,?,?,?)';
    let sqlarr = [username, nickname, password, regis_date, vip_expire_date];
    return new Promise((resolve, reject) => {
        sqlutil.sqlconnection(sql, sqlarr, (err, result) => {
            if (err) {
                // console.log(err);
                reject(err);
            }
            // console.log(result);
            resolve(result);
        });
    });
}
/**
 * 获取所有用户
 */
function getAllUsers() {
    let sql = `SELECT * FROM user`;
    let sqlarr = [];
    return new Promise((resolve, reject) => {
        sqlutil.sqlconnection(sql, sqlarr, (err, result) => {
            if (err) {
                // console.log(err);
                reject(err)
            }
            resolve(result);
        });
    });
}

/**
 * @param {number} id 根据id查询用户，id为number类型
 */
function getUserById(id) {
    let sql = 'SELECT * FROM user WHERE id = ?';
    let sqlarr = [id];
    return new Promise((resolve, reject)=>{
        sqlutil.sqlconnection(sql, sqlarr, (err, result) => {
            if (err) {
                // console.log(err);
                reject(err);
            }
            resolve(result);
        });
    });
}
/**
 * @param {string} nickname 用户要更新的昵称
 * @param {string} phone 用户要更新的手机号
 * @param {string} email 用户要更新的email地址
 * @param {number} id 待更新的用户id
 */
function updateUserById(nickname, phone, email, id) {
    let sql = `UPDATE user SET nickname = ?, phone = ?, email = ? WHERE id = ?`;
    let sqlarr = [nickname, phone, email, id];
    return new Promise((resolve, reject) => {
        sqlutil.sqlconnection(sql, sqlarr, (err, result) => {
            if (err) {
                // console.log(err);
                reject(err);
            }
            // console.log(result);
            resolve(result);
        });
    });
}

/**
 * @param {string} nickname 用户要更新的昵称
 * @param {number} id 待更新的用户id
 */
function updateUserNicknameById(nickname, id) {
    let sql = `UPDATE user SET nickname = ? WHERE id = ?`;
    let sqlarr = [nickname, id];
    return new Promise((resolve,reject)=>{
        sqlutil.sqlconnection(sql, sqlarr, (err, result) => {
            if (err) {
                // console.log(err);
                reject(err);
            }
            resolve(result);
        });
    });
}

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    updateUserById,
    updateUserNicknameById
}