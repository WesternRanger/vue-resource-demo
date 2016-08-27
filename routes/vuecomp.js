/**
 * Created by WesternRanger on 16/1/5.
 */
var express = require('express'),
    router = express.Router(),
    db = require('./conn'); //先引入数据库链接

router.get('/', function(req, resIndex) {
    resIndex.render('vuecomp', {
        title: "从这里开始",
    });
});

module.exports = router;
