const userDao = require('../dao/userDao.js');
const md5 = require('md5');

const isUsernameExisted = (username) => {
    let rowDataPacket = userDao.getUserByUsername(username);
    return rowDataPacket ?? [];
}

const login = (username, password) => {

}