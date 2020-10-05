const sqlutil = require('../util/sqlutils/sqlutil.js');
const moment = require('moment');

/**
 * * DAO层统一返回Promise对象，由Controll层决定后续操作
 */

/**
 * @brief 使用用户名、密码添加一个用户
 * @param {string} username 用户注册的名称
 * @param {string} password 经过md5摘要的密码密文
 * @param {string} regis_date 用户注册的时间字符串 YYYY-MM-DD HH:mm:ss
 * @example regis_date = '2222-12-12 22:22:22'
 * @return {Promise} 返回一个Promise对象
 */
function addUser(username, password) {
    const vip_expire_date = "2000-01-01 00:00:00";
    let regis_date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    // 默认nickname为username
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
 * @brief 获取所有用户
 * @return {Promise} 返回一个Promise对象
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
 * @return {Promise} 返回一个Promise对象
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
 * @brief 更新用户个人信息
 * @param {string} nickname 用户要更新的昵称
 * @param {string} phone 用户要更新的手机号
 * @param {string} email 用户要更新的email地址
 * @param {number} id 待更新的用户id
 * @return {Promise} 返回一个Promise对象
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
 * @brief 更新用户昵称
 * @param {string} nickname 用户要更新的昵称
 * @param {number} id 待更新的用户id
 * @return {Promise} 返回一个Promise对象
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

/**
 * @brief 根据id更新用户手机号
 * @param {string} phone 用户要更新的手机号
 * @param {number} id 待更新的用户id
 * @return {Promise} 返回一个Promise
 */
function updateUserPhoneById(phone, id){
    let sql = `UPDATE user SET phone = ? WHERE id = ?`;
    let sqlarr = [phone, id];
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

/**
 * @brief 根据用户id更新用户邮箱
 * @param {string} email 用户要更新的邮箱
 * @param {number} id 待更新的用户id
 * @return {Promise} 返回一个Promise
 */
function updateUserEmailById(email, id){
    let sql = `UPDATE user SET email = ? WHERE id = ?`;
    let sqlarr = [email, id];
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

/**
 * @breif 激活/停用 用户
 * @param {number} is_activate 1为激活，0为未激活
 * @param {number} id 待更新的用户id
 * @return {Promise} 返回一个Promise
 */
function updateUserIsActivateById(is_activate, id){
    let sql = `UPDATE user SET is_activate = ? WHERE id = ?`;
    let sqlarr = [is_activate, id];
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

/**
 * @brief 激活/停用 会员
 * @param {number} is_vip 1为激活，0为未激活
 * @param {number} id 待更新的用户id
 */
function updateUserIsVipById(is_vip, id){
    let sql = `UPDATE user SET is_vip = ? WHERE id = ?`;
    let sqlarr = [is_vip, id];
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
    updateUserNicknameById,
    updateUserPhoneById,
    updateUserEmailById,
    updateUserIsActivateById,
    updateUserIsVipById
}