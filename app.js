const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter.js');
const sessionRouter = require('./routes/sessionRouter.js');
const app = express();

/**
 * * 解析json和urlencoded类型的数据 作为body属性挂载在req对象上
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('./public'))

app.use('/user', userRouter);
app.use('/session', sessionRouter);

const server = app.listen(8888, () => {});