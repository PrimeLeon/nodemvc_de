const express = require('express');
const router = express();
const userController = require('./controller/userController.js');
const jsonWebToken = require("jsonwebtoken");

/**
 * Session 资源
 */
router.get('/session', (req, res) => {
    //TODO 获取会话信息
});
router.post('/session', (req, res) => {
    let user = {
        username,
        password,
        token
    } = req.query;
    let loginPromise = userController.loginController(user);
    /**
     * TODO: token veirify 
     */
    if (!user.token) {
        let token = jsonWebToken.sign({
            user
        }, 'privatekey', {
            expiresIn: 60 * 60
        });
        loginPromise.then((result) => {
            res.send(token);
        }, (err) => {
            res.send(err);
        });

    } else {
        let result = jsonWebToken.verify(user.token, 'privatekey');
        res.send(result);
    }
});
router.put('/session', (req, res) => {
    //TODO 更新当前会话信息
    //TODO 心跳
});
router.delete('/session', (req, res) => {
    //TODO 销毁当前会话（登出
});

module.exports = route
