/**
 * Created by WesternRanger on 16/6/14.
 */
var Vue = require('vue'),
    confirm = require('./confirm.vue'),
    vueResource = require('vue-resource'),// 获取网络数据
    VueAsyncData = require('vue-async-data');

Vue.config.silent = true; // 取消所有vue日志跟警告
//Vue.config.debug = false;
Vue.use(vueResource);
Vue.use(VueAsyncData);


let cl111 = new Vue({
    el: 'body',// 依附对象
    data: {
        name: '点击',
        flag: false,//控制弹框出现
        items: 'demoArr',
        isTrue:false
    },
    ready: function(){
        this.$http.post('/comment', {id:1}, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: true
        }).then(function(response) {
            var data = response.data;
            this.items = data.demoArr;
        }, function(response) {
            // handle error
        });
    },
    components: {//依赖组件
        'confirm': confirm
    },
    events: {//接受来自组件的消息
        'confirm-msg': function (msg) {
            //关闭弹框开关-false
            this.flag = msg.closeConfirm;
            //背景滚动锁去掉
            this.isTrue = false;

            if(msg.cancelCallback){//点击取消
                console.log(4444)
            }
            if(msg.sureCallback){//点击确定
                msg.sureCallback();
            }
        }
    },
    methods: {//点击事件
        clickHandler: function (e) {
            //防止背景滚动
            this.isTrue = true;
            //弹窗开关打开
            this.flag = true;

        }
    }
});