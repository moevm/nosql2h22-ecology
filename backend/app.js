let express = require('express');

let indexRouter = require('./routes/index');

const app = express();

app.use(express.json());

app.use('/', indexRouter);

app.listen(3001, function (){
    console.log('Backend listen on port 3001\n');
})

module.exports = app;