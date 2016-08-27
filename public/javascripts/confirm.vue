<style>
    .fullMask{
        height:100%;
        overflow:hidden;
    }
    .ncf-confirm{
        width:4.5rem;
        text-align: center;
        border-radius: 5px;
        position:fixed;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        z-index:10001;
        background: #fff;
        font-size:0.3rem;
    }
    .conf-cont {
        width:3.9rem;
        margin:0.3rem;
        max-height:3rem;
        overflow-y: auto;
    }
    .conf-btn-grp{
        width:100%;
        display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
        display: -moz-box; /* Firefox 17- */
        display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
        display: -moz-flex; /* Firefox 18+ */
        display: flex;
        border-top:#e5e5e5 solid 1px;
    }
    .conf-cancel{
        -webkit-box-flex:1;
        -moz-box-flex:1;
        -webkit-flex: 1;
        -moz-flex: 1;
        flex:1;
        padding:0.15rem 0;
        border-right:1px solid #e5e5e5;
    }
    .conf-sure{
        -webkit-box-flex:1;
        -moz-box-flex:1;
        -webkit-flex: 1;
        -moz-flex: 1;
        flex:1;
        padding:0.15rem 0;
    }
    .mask{
        position: fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background:rgba(0,0,0,0.5);
        z-index:10000;
    }
</style>
<template>
    <div class="ncf-confirm">
        <div class="conf-cont">
            <vue_demo></vue_demo>
        </div>
        <div class="conf-btn-grp">
            <div class="conf-cancel" @click="doCancel" v-if="canc">取消</div>
            <div class="conf-sure" @click="doSure" v-if="sure">确定</div>
        </div>
    </div>
    <div class="mask" @click="clickHandler"></div>
</template>
<script>
    var diyBox = require('./vue_demo.vue');//定义弹框内容

    let maskMsg = {
            closeConfirm:false,
        },
        cancelMsg = {
            closeConfirm:false,
            cancelCallback:function(){
                console.log('cancel');
            }
        },
        sureMsg = {
            closeConfirm:false,
            sureCallback:function(){
                console.log('sure');
            }
        };

    module.exports ={
        data:function(){
            return {
                msg:'hello world',
                canc:1,
                sure:0,
            };
        },
        components:{
            vue_demo:diyBox//填充box
        },
        props:['canc','sure','msg'],//获取赋值属性
        methods:{
            clickHandler:function(e){//隐藏
                this.$dispatch('confirm-msg', maskMsg);
            },
            doCancel:function(){//点击取消
                this.$dispatch('confirm-msg', cancelMsg);
            },
            doSure:function(){//点击确定
                this.$dispatch('confirm-msg', sureMsg);
            }
        }
    }

</script>