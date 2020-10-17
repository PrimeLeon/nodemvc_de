const express = require('express');
const router = express();
const userController = require('../controller/userController.js');
const jsonWebToken = require("jsonwebtoken");

/**
 * User 资源
 */

/**
 * ! 需要CheckLogin的中间件
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
    /**
     * * 使用json格式数据进行提交
     */
    let user = req.body;
    let registerPromise = userController.registerController(user);
    registerPromise.then((result) => {
        res.send(result);
    }, (err) => {
        res.send(err);
    });
});

router.put('/:id', (req, res) => {
    /**
     * * id由params获得
     * * 更新信息由json格式进行提交
     */
    let {
        id
    } = req.params;
    let user = req.body;
    user.id = id;
    let updatePromise = userController.updateController(user);
    updatePromise.then((result) => {
        res.send(result);
    }, (err) => {
        res.send(err);
    });
});
router.delete('/:id', (req, res) => {
    //TODO 删除用户id用户的信息
});

module.exports = router;