
/**
 * Dependeces
 */
const userDao = require('../dao/userDao.js');
const Msg = require('../entity/Msg.js');
/**
 * Entity
 */
const userdao = new UserDao();
/**
 * @brief 获取用户信息
 * @param {number} id 用户id
 * @return {Msg} 返回消息对象
 */
const getUserinfoInfo = async (id) => {
    let resultPak = await userdao.getUserById(id);
    return new Msg({
        errcode: 'ser-gui000',
        errmsg: 'none'
    }, resultPak);
}

module.exports = {
    getUserinfoInfo
}