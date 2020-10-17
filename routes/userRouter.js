const express = require('express');
const router = express();
const userController = require('../controller/userController.js');
const jsonWebToken = require("jsonwebtoken");
/**
 * User 资源
 */
router.get('/:id', (req, res) => {
    // 路由:id参数由params获得
    let user = req.params;
    let getUserInfoPromise = userController.getUserinfoController(user);
    getUserInfoPromise.then((result) => {
        res.send(result);
    }, (err) => {
        res.send(err);
    })
});

router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
    //TODO 更新用户id用户的信息
    let user = req.query;
    console.log(user);
});
router.delete('/:id', (req, res) => {
    //TODO 删除用户id用户的信息
});

module.exports = router;