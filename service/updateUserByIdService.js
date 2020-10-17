const userDao = require('../dao/userDao.js');
/**
 * Entity
 */
const Msg = require('../entity/Msg.js');
/**
 * ! NEED COMMENTS HERE!!
 */

const update = async (password, nickname, phone, email, id) => {
    let resultPak = await userDao.updateUserById(password, nickname, phone, email, id);
    return new Msg({
        errcode: 'ser-gui000',
        errmsg: 'none'
    }, resultPak);
}

module.exports = {
    update
}