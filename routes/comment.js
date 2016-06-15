/**
 * Created by WesternRanger on 16/1/2.
 */
var express = require('express');
var router = express();
//var db = require('./conn');

router.post('/', function(req, res) {
    var id = req.body.id;
    if(id==1){
        res.json({
            errno:0, //0代表成功，非0代表失败 [107000]=>支付处理中  [107001]=>支付失败
            errmsg:'',//返回这次请求的信息；成功；失败：原因。
            demoArr: [
                { message: 'Foo1' },
                { message: 'Foo3' },
                { message: 'Foo4' },
                { message: 'Foo4' },
                { message: 'Foo4' },
                { message: 'Foo4' },
                { message: 'Foo4' },
                { message: 'Foo4' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo5' },
                { message: 'Foo6' },
                { message: 'Bar7' }
            ]
        })
    }else{
        res.json({
            errno:111,
            errmsg:'请求错误'
        })
    }

})
module.exports = router;
