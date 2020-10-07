const userDao = require('../dao/userDao.js');

/**
 * ! NEED COMMENTS HERE!!
 */
const isUsernameExisted = (username) => {
    let resultPak = userDao.getUserByUsername(username);
    return resultPak;
}

const login = (username, password) => {
    // TODO:
}