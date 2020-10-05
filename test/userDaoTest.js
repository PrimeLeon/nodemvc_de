const userDao = require('../dao/userDao.js');
const md5 = require('md5');

const TUser = {
    id: 19,
    username: 'PrimeLeon',
    password: md5('PrimeLeon'),
    phone: "18888888888",
    email: "hahahah@haha.com",
    nickname: "Leon's nickname"
}

const main = async () => {
    let _getAllUsers = await userDao.getAllUsers();
}

main();