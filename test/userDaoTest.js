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

function main() {
    userDao.addUser(TUser.username, TUser.password).then((res) => {
        console.log('addUser 通过');
    }, (err) => {
        consoe.log('addUser 失败');
    });
    userDao.getAllUsers().then((res) => {
        console.log('getAllUser 通过');
    }, (err) => {
        console.log('getAllUser 失败');
    });
    userDao.getUserById(TUser.id).then((res) => {
        console.log('getUserById 通过');
    }, (err) => {
        console.log('getUserById 失败');
    });
    userDao.updateUserById(TUser.nickname, TUser.phone, TUser.email, TUser.id + 1).then((res) => {
        console.log('updateUserById 通过');
    }, (err) => {
        console.log('updateUserById 失败');
    });
    // userDao.getUserById(TUser.id).then((res) => {
    //     console.log('getUserById 通过');
    // }, (err) => {
    //     console.log('getUserById 失败');
    // });
    // userDao.getUserById(TUser.id).then((res) => {
    //     console.log('getUserById 通过');
    // }, (err) => {
    //     console.log('getUserById 失败');
    // });
}

main();