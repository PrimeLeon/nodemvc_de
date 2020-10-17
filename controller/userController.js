const md5 = require('md5');

const getUserInfoService = require('../service/getUserInfoService.js');
const registerService = require('../service/registerService.js');
const loginService = require('../service/loginService.js');
const updateService = require('../service/updateUserByIdService.js');

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
            return registerService.register(userObj.username, md5(userObj.password));
        } else {
            return new Msg({
                errcode: 'com-002',
                errmsg: 'illegal input'
            }, {});
        }
    } else {
        return new Msg({
            errcode: 'com-001',
            errmsg: 'missing params'
        }, {})
    }
}

/**
 * * 根据id获取用户信息
 */
const getUserinfoController = async (userObj) => {
    if (userObj.id) {
        if (inputFilter.numFilter.isLegal(userObj.id)) {
            return getUserInfoService.getUserinfoInfo(userObj.id);
        } else {
            return new Msg({
                errcode: 'com-002',
                errmsg: 'illegal input'
            }, {});
        }
    } else {
        return new Msg({
            errcode: 'com-001',
            errmsg: 'missing params'
        }, {})
    }
}

/**
 * * 登录功能
 */
const loginController = async (userObj) => {
    if (userObj.username && userObj.password) {
        if (inputFilter.numletterFilter.isLegal(username)) {
            let md5Psd = md5(userObj.password);
            return loginService.login(userObj.username, md5Psd);
        } else {
            return new Msg({
                errcode: 'com-002',
                errmsg: 'illegal input'
            }, {});
        }
    } else {
        return new Msg({
            errcode: 'com-001',
            errmsg: 'missing params'
        }, {})
    }
}

/**
 * * 更新用户信息
 */
const updateController = async (userObj) => {
    let {
        id,
        password,
        nickname,
        phone,
        email
    } = userObj;
    console.log(userObj);
    if (password && nickname && phone && email) {
        let isLegalFlag = true;
        /**
         * * 判断昵称和密码
         */
        for (const key in userObj) {
            if (key == 'id' || key == 'email' || key == 'phone') continue;
            if (inputFilter.numletterFilter.isLegal(userObj[key])) {
                isLegalFlag = false;
                break;
            }
        }
        /**
         * * 判断邮箱和手机是否合法
         */
        isLegalFlag = isLegalFlag &&
            inputFilter.phoneFilter.isLegal(userObj['phone']) &&
            inputFilter.emailFilter.isLegal(userObj['email']);

        if (isLegalFlag) {
            let md5Psd = md5(userObj.password);
            return updateService.update(md5Psd, nickname, phone, email, id);
        } else {
            return new Msg({
                errcode: 'com-002',
                errmsg: 'illegal input'
            }, {});
        }
    } else {
        return new Msg({
            errcode: 'com-001',
            errmsg: 'missing params'
        }, {})
    }

}

module.exports = {
    registerController,
    getUserinfoController,
    loginController,
    updateController
}