const userDao = require('../dao/userDao.js');
const md5 = require('md5');

/**
 * @brief 确认用户是否存在
 * @param {string} username 待确认是否存在的用户的用户名
 * @return {array[object]} 返回的RowDataPacket
 * @example [{key:value,key:value...},....]
 */
const isUsernameExisted = async (username) => {
    //FIXME: Promise在resolve()中无法处理[]空数组
    let rowDataPacket = (await userDao.getUserByUsername(username)).data;
    console.log(rowDataPacket);
    
    return rowDataPacket ? rowDataPacket : [];
}


let res = isUsernameExisted('PrimeLeon');


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
        data: {
            promise: userDao.addUser(username, md5password)
        }
    }
 */
const register = (username, password) => {
    let md5password = md5(password);
    let hasuser = isUsernameExisted(username);
    console.log(hasuser);
    if (!hasuser) {
        return {
            state: {
                errcode: 'u000',
                errmsg: 'none'
            },
            data: {
                promise: userDao.addUser(username, md5password)
            }
        };
    } else {
        return {
            state: {
                errcode: 'u001',
                errmsg: 'username was existed',
            },
            data: {
                promise: null
            }
        };
    }
}

module.exports = {
    register
}