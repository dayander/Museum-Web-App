require('babel-core/register')({
    "presets": ['react', 'es2016', 'stage-2']
})


var express = require('express');
var path = require('path');

var httpProxy = require('http-proxy');

var requestHandler = require('./requestHandler');




var app = express();


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);











app.get('*', requestHandler);

// app.use(requestHandler);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



module.exports = app;
