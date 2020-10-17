const express = require('express');
const userRouter = require('./routes/userRouter.js');
const sessionRouter = require('./routes/sessionRouter.js');
/**
 * Entity
 */

const app = express();

app.use('./user',userRouter);
app.use('./session',sessionRouter);



const server = app.listen(8888, () => {});
