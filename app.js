const express = require('express');

const userController = require('./controller/userController.js');
/**
 * Entity
 */

const app = express();
/**
 * Session 资源
 */
app.get('/session', (req, res) => {
    //TODO 获取会话信息
});
app.post('/session', (req, res) => {
    let user = {
        username,
        password
    } = req.query;
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
    // 路由:id参数由params获得
    let user = req.params;
    let getUserInfoPromise = userController.getUserinfoController(user);
    getUserInfoPromise.then((result) => {
        res.send(result);
    }, (err) => {
        res.send(err);
    })
});

app.post('/user', (req, res) => {
    // post参数由query获得
    let user = req.query;
    let registerPromise = userController.registerController(user);
    registerPromise.then((result) => {
        res.send(result);
    }, (err) => {
        res.send(err);
    });
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