const userDao = require('../dao/userDao.js');

/**
 * @brief 获取用户信息
 * @param {number} id 用户id
 * @return {object} 返回消息对象
 * @example {
        state: {
            errcode: 'u-r000',
            errmsg: 'none'
        },
        data: {}
    };
 */
const getUserinfoInfo = async (id) => {
    let resultPak = await userDao.getUserById(id);
    return {
        state: {
            errcode: 'u-gui000',
            errmsg: 'none'
        },
        data: resultPak
    };
}

module.exports = {
    getUserinfoInfo
}