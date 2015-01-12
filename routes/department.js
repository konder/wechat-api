var express = require('express');
var router = express.Router();

var config = require('../config');
var wechat = require('wechat-enterprise');
var api = new wechat.API(config.corpid, config.secret, config.agentid);

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    next();
});

router.get('/:departid', function (req, res) {
    api.getDepartmentUsers(req.params.departid, 1, 0, function (_error, _data) {
        _error ? res.status(401).send(error) : res.send(_data.userlist);
    });
});

module.exports = router;
