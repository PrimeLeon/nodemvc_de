var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh', {
    expiresIn: 5
});

console.log(token);