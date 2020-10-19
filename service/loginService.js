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
 * ! NEED COMMENTS HERE!!
 */
const isPasswordMatchUsername = async (username, password) => {
    let resultPak = await userdao.getUserByUsernameAndPassword(username, password);
    return resultPak;
}

const login = async (username, password) => {
    let resultPak = await isPasswordMatchUsername(username, password);
    if (resultPak.length == 1) {
        return new Msg({
            errcode: 'ser-li000',
            errmsg: 'none'
        }, resultPak);
    } else {
        return new Msg({
            errcode: 'ser-li001',
            errmsg: 'username or password is incorrect'
        }, {});
    }
}

module.exports = {
    login
}