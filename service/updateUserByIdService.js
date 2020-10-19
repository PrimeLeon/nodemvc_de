/**
 * Dependeces
 */
const Msg = require('../entity/Msg.js');
const UserDao = require('../dao/userDao.js');
/**
 * Entity
 */
const userdao = new UserDao();

/**
 * ! NEED COMMENTS HERE!!
 */
const update = async (password, nickname, phone, email, id) => {
    let resultPak = await userdao.updateUserById(password, nickname, phone, email, id);
    return new Msg({
        errcode: 'ser-gui000',
        errmsg: 'none'
    }, resultPak);
}

module.exports = {
    update
}