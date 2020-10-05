const userDao = require('../dao/userDao.js');
const md5 = require('md5');
const async = require('../study/async.js');

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
 * @return {object} 返回一个消息对象
 * @example {
        state: {
            errcode: 'u000',
            errmsg: 'none'
        }, 
        promise: await userDao.addUser(username, md5password)
    }
 */
const register = async (username, password) => {
    let md5password = md5(password);
    let hasuser = await isUsernameExisted(username);

    //FIXME: hasuser是一个[]空数组为什么会判定为true
    //FIXED: 虽然改了判定但是还是不明白
    if (!hasuser.length > 0) {
        await userDao.addUser(username, md5password);
        return {
            state: {
                errcode: 'u000',
                errmsg: 'none'
            }
        };
    } else {
        return {
            state: {
                errcode: 'u001',
                errmsg: 'username was existed',
            }
        };
    }
}

module.exports = {
    register
}