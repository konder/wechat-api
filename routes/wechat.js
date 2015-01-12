var express = require('express');
var router = express.Router();

var config = require('../config');
var http = require('http');
var wechat = require('wechat-enterprise');

router.post('/', wechat(config, wechat.text(function (message, req, res, next) {
    // TODO
    config.reply.forEach(function (e) {
        try {
            var req = http.request(e, function () {
            });
            req.on('error', function (e) {
                console.log(e);
            });
            req.write(JSON.stringify(message));
            req.end();
        } catch (e) {
            // TODO
            console.log(e);
        }
    });
    res.status(200).send('ok');
})));

module.exports = router;
