const userDao = require('../dao/userDao.js');
/**
 * Entity
 */
const Msg = require('../entity/Msg.js');

/**
 * @brief 获取用户信息
 * @param {number} id 用户id
 * @return {Msg} 返回消息对象
 */
const getUserinfoInfo = async (id) => {
    let resultPak = await userDao.getUserById(id);
    return new Msg({
        errcode: 'ser-gui000',
        errmsg: 'none'
    }, resultPak);
}

module.exports = {
    getUserinfoInfo
}