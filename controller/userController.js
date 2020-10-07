const md5 = require('md5');

const getUserInfoService = require('../service/getUserInfoService.js');
const registerService = require('../service/registerService.js');
const jsonWebToken = require("jsonwebtoken");

const inputFilter = require('../util/Filter/inputFilter.js');
/**
 * Entity
 */
const Msg = require('../entity/Msg.js');

/**
 * @brief 检测非法输入
 * @param {object} userObj 注册用户参数对象
 * @return {Promise} 返回一个由Msg对象初始化的，resolved状态的Promise对象
 */
const registerController = async (userObj) => {
    if (userObj.username && userObj.password) {
        if (inputFilter.numletterFilter.isLegal(userObj.username)) {
            return new Msg({
                errcode: 'com-002',
                errmsg: 'illegal input'
            }, {});
        } else {
            return registerService.register(userObj.username, md5(userObj.password));
        }
    } else {
        return new Msg({
            errcode: 'com-001',
            errmsg: 'none params'
        }, {})
    }
}

/**
 * ! NEED COMMENTS HERE!!
 */
const getUserinfoController = async (userObj) => {
    if (userObj.id) {
        if (inputFilter.numletterFilter.isLegal(userObj.id)) {
            return new Msg({
                errcode: 'com-002',
                errmsg: 'illegal input'
            }, {});
        } else {
            return getUserInfoService.getUserinfoInfo(userObj.id);
        }
    } else {
        return new Msg({
            errcode: 'com-001',
            errmsg: 'none params'
        }, {})
    }
}

/**
 * ! NEED COMMENTS HERE!!
 */
const loginController = async (userObj) => {
    if (userObj.username && userObj.password) {
        if (inputFilter.numletterFilter.isLegal(userObj.id)) {
            // TODO:
        } else {
            // TODO:

        }
    } else {
        return new Msg({
            errcode: 'com-001',
            errmsg: 'none params'
        }, {})
    }
}

module.exports = {
    registerController,
    getUserinfoController
}