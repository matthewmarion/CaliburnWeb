let mongoose = require('mongoose');
let gracefulShutdown;
let dbURI = 'mongodb://localhost/caliburnweb';

if (process.env.NODE_ENV === 'production') {
    dbURI = 'mongodb://admin:G1g$zdI4kByPX*ovd*T1@ds149335.mlab.com:49335/heroku_phkv7k8q';
}

mongoose.connect(dbURI);

let readLine = require('readline');
if (process.platform == 'win32') {
    let rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', function() {
        process.emit('SIGINT');
    });
}

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.once('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});

process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function() {
        process.exit(0);
    });
});

require('./newsPosts.js');