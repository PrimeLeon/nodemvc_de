const userDao = require('../dao/userDao.js');
/**
 * Entity
 */
const Msg = require('../entity/Msg.js');

/**
 * @brief 确认用户是否存在
 * @param {string} username 待确认是否存在的用户的用户名
 * @return {array[object]} 返回的RowDataPacket
 * @example [{key:value,key:value...},....]
 */
const isUsernameExisted = async (username) => {
    let resultPak = await userDao.getUserByUsername(username);
    return resultPak;
}

/**
 * @brief 注册用户服务
 * @param {string} username 待注册的用户名
 * @param {string} password 待注册的用户的密码
 * @return {Promise} 返回一个由Msg对象初始化的，resolved状态的Promise对象
 */
const register = async (username, password) => {
    // 此处要等待异步操作完成
    let resultPak = await isUsernameExisted(username);
    //FIXED: 虽然改了判定但是还是不明白,hasuser是一个[]空数组为什么会判定为true
    if (resultPak.length == 0) {
        await userDao.addUser(username, password);
        return new Msg({
            errcode: 'ser-r000',
            errmsg: 'none'
        }, {});
    } else {
        return new Msg({
            errcode: 'ser-r001',
            errmsg: 'username was existed',
        }, {});
    }
}

module.exports = {
    register
}