require('babel-core/register')({
    "presets": ['react', 'es2016', 'stage-2']
})


var express = require('express');
var path = require('path');

var httpProxy = require('http-proxy');

var requestHandler = require('./requestHandler');
var cors = require('cors');




var app = express();


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


const corsOptions = {
    origin: "https://cloud.estimote.com"
};
app.use(cors(corsOptions));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "https://cloud.estimote.com");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    next();
}


app.use(allowCrossDomain);




let port = 3000;


app.listen(port, () => console.log(`Example app listening on port ${port}!`));





app.get('*', requestHandler);

// app.use(requestHandler);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



module.exports = app;
