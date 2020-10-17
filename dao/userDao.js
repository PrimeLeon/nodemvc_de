const sqlutil = require('../util/sqlutils/sqlutil.js');
const moment = require('moment');

/**
 * * DAO层统一返回Promise对象，由Service层决定操作顺序
 */

/**
 * @brief 使用用户名、密码添加一个用户
 * @param {string} username 用户注册的名称
 * @param {string} password 经过md5摘要的密码密文
 * @param {string} regis_date 用户注册的时间字符串 YYYY-MM-DD HH:mm:ss
 * @example regis_date = '2222-12-12 22:22:22'
 * @return {Promise} 返回一个Promise对象
 */
const addUser = async (username, password) => {
    const vip_expire_date = "2000-01-01 00:00:00";
    let regis_date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    // 默认nickname为username
    let nickname = username;
    let sql = 'INSERT INTO user (username,nickname,password,regis_date,vip_expire_date) VALUES (?,?,?,?,?)';
    let sqlarr = [username, nickname, password, regis_date, vip_expire_date];
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @brief 获取所有用户
 * @return {Promise} 返回一个Promise对象
 */
const getAllUsers = async () => {
    let sql = `SELECT * FROM user`;
    let sqlarr = [];
    let resultPak = await sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @brief 根据用户id查询用户
 * @param {number} id 用户id
 * @return {Promise} 返回一个Promise对象
 */
const getUserById = async (id) => {
    let sql = 'SELECT * FROM user WHERE id = ?';
    let sqlarr = [id];
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @brief 根据用户名查询用户
 * @param {string} username 用户的用户名
 * @return {Promise} 返回一个Promise对象
 */
const getUserByUsername = async (username) => {
    let sql = 'SELECT * FROM user WHERE username = ?';
    let sqlarr = [username];
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @brief 根据用户名和密码查询用户是否存在
 * @param {string} username 用户的用户名
 * @param {string} password 用户的密码(md5)
 */
const getUserByUsernameAndPassword = async (username, password) => {
    let sql = 'SELECT * FROM user WHERE username = ? and password = ?';
    let sqlarr = [username, password];
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @brief 根据邮箱查询用户
 * @param {string} email 用户的用户名
 * @return {Promise} 返回一个Promise对象
 */
const getUserByEmail = async (email) => {
    let sql = 'SELECT * FROM user WHERE username = ?';
    let sqlarr = [email];
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @brief 根据手机号查询用户
 * @param {string} phone 用户的用户名
 * @return {Promise} 返回一个Promise对象
 */
const getUserByPhone = async (phone) => {
    let sql = 'SELECT * FROM user WHERE username = ?';
    let sqlarr = [phone];
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @brief 更新用户个人信息
 * @param {string} nickname 用户要更新的昵称
 * @param {string} password 用户要更新的密码
 * @param {string} phone 用户要更新的手机号
 * @param {string} email 用户要更新的email地址
 * @param {number} id 待更新的用户id
 * @return {Promise} 返回一个Promise对象
 */
const updateUserById = async (password, nickname, phone, email, id) => {
    let sql = `UPDATE user SET password = ?, nickname = ?, phone = ?, email = ? WHERE id = ?`;
    let sqlarr = [password, nickname, phone, email, id];
    console.log(sqlarr);
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @brief 更新用户昵称
 * @param {string} nickname 用户要更新的昵称
 * @param {number} id 待更新的用户id
 * @return {Promise} 返回一个Promise对象
 */
const updateUserNicknameById = async (nickname, id) => {
    let sql = `UPDATE user SET nickname = ? WHERE id = ?`;
    let sqlarr = [nickname, id];
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @brief 根据id更新用户手机号
 * @param {string} phone 用户要更新的手机号
 * @param {number} id 待更新的用户id
 * @return {Promise} 返回一个Promise
 */
const updateUserPhoneById = async (phone, id) => {
    let sql = `UPDATE user SET phone = ? WHERE id = ?`;
    let sqlarr = [phone, id];
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @brief 根据用户id更新用户邮箱
 * @param {string} email 用户要更新的邮箱
 * @param {number} id 待更新的用户id
 * @return {Promise} 返回一个Promise
 */
const updateUserEmailById = async (email, id) => {
    let sql = `UPDATE user SET email = ? WHERE id = ?`;
    let sqlarr = [email, id];
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @breif 激活/停用 用户
 * @param {number} is_activate 1为激活，0为未激活
 * @param {number} id 待更新的用户id
 * @return {Promise} 返回一个Promise
 */
const updateUserIsActivateById = async (is_activate, id) => {
    let sql = `UPDATE user SET is_activate = ? WHERE id = ?`;
    let sqlarr = [is_activate, id];
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}

/**
 * @brief 激活/停用 会员
 * @param {number} is_vip 1为激活，0为未激活
 * @param {number} id 待更新的用户id
 * @return {Promise} 返回一个Promise
 */
const updateUserIsVipById = async (is_vip, id) => {
    let sql = `UPDATE user SET is_vip = ? WHERE id = ?`;
    let sqlarr = [is_vip, id];
    let resultPak = sqlutil.sqlconnection(sql, sqlarr);
    return resultPak;
}


module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    getUserByPhone,
    updateUserById,
    updateUserNicknameById,
    updateUserPhoneById,
    updateUserEmailById,
    updateUserIsActivateById,
    updateUserIsVipById,
    getUserByUsernameAndPassword
}