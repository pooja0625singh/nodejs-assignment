// import required essentials
const http = require('http');
const express = require('express');

const userRouter = require('./routes/createUser');
const itemsRouter = require('./routes/orders');


// create new app
const app = express();
app.use(express.json());

app.use('/create', userRouter);
app.use('/orders', itemsRouter);

// default URL to API
app.use('/', function(req, res) {
    res.send('nodejs works :-)');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);