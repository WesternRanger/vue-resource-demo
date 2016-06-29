var express = require('express'),
    router = express.Router(),
    db = require('./conn'); //先引入数据库链接

router.get('/', function(req, resIndex) {
    resIndex.render('index', { });
});

module.exports = router;
