<style>
    .vue_demo{
        position:fixed;
        top:30%;
        left:50%;
        transform:translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        background:#e5e5e5;
        width:4rem;
        margin:0.6rem auto;
        text-align:center;
        color:#ff9da4;
        font-size:0.3rem;
    }
    .content{
        padding:0.5rem 0;
        text-align:center;
    }
    .btn-comb{
        overflow: hidden;
        background:#f8f8f8;
    }
    .left,.right{
        width:50%;
        padding:0.2rem 0;
        text-align: center;
        color:#000;
        font-size:0.28rem;
        float:left;
    }
</style>
<template>
    <div class="vue_demo" v-if="confirm_info_chg.confirm_show">
        <div class="content {{confirm_info_chg.classs}}">
            {{confirm_info_chg.confirm_name}}
        </div>
        <div class="btn-comb">
            <div class="left">取消</div>
            <div class="right" @click.stop="show_name">确定</div>
        </div>
    </div>
</template>
<script>
    var def_info = {
        confirm_show:false,
        confirm_name:'hello world!',
        classs:'aaa'
    };
    module.exports = {
        props:['confirm_info'],
        computed:{
            confirm_info_chg:function(){
                var that = this;
                that.confirm_info = Object.assign(def_info,that.confirm_info);
                return that.confirm_info;
            }
        },
        methods:{
            show_name:function(){
                alert(this.confirm_name);
            }
        }
    }
</script>