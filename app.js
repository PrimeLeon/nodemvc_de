const express = require('express');
const bodyParser = require('body-parser');
const jsonWebToken = require("jsonwebtoken");

const getUserInfoService = require('./service/getUserInfoService.js');
const registerService = require('./service/registerService.js');

const app = express();
/**
 * Session 资源
 */
app.get('/session', (req, res) => {
    //TODO 获取会话信息
});
app.post('/session', (req, res) => {
    //TODO 创建新的会话（登入
});
app.put('/session', (req, res) => {
    //TODO 更新当前会话信息
    //TODO 心跳
});
app.delete('/session', (req, res) => {
    //TODO 销毁当前会话（登出
});

/**
 * User 资源
 */
app.get('/user/:id', (req, res) => {
    //TODO 获取id用户的信息
    let {
        id
    } = req.params;
    console.log(req);
    let getUserInfoPromise = getUserInfoService.getUserinfoInfo(id);
    getUserInfoPromise.then((result) => {
        res.send(result);
    }, (err) => {
        res.send(err);
    })
});
app.post('/user', async (req, res) => {
    //TODO 创建新的用户（注册
    let {
        username,
        password
    } = req.query;
    let registerPromise = registerService.register(username, password);
    registerPromise.then((result) => {
        res.send(result);
    }, (err) => {
        res.send(err);
    })

});
/**
 * 
 */
app.put('/user/:id', (req, res) => {
    //TODO 更新用户id用户的信息
});
app.delete('/user/:id', (req, res) => {
    //TODO 删除用户id用户的信息
});

const server = app.listen(8088, () => {});