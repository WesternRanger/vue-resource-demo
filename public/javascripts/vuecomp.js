/**
 * Created by WesternRanger on 16/8/27.
 */
import Vue from 'vue';
import vue_confirm from './confirm_v2.vue';

class VueComp{
    constructor(){
        this.vueInit();
    }
    vueInit(rs){
        var $vm = new Vue({
            el:'body',
            components:{
                vue_confirm:vue_confirm
            },
            data:{
                name:'chenqi',
                //修改组件默认属性
                confirm_info:{
                    confirm_show:true,
                    confirm_name:'hello world!',
                }
            }
        });
        return $vm;
    }
    dataInit(){
        $.ajax({
            url:'/comment',
            type:'post',
            dataType:'json',
            data:{
                id:1
            },
            success:function(rs){

            }
        })
    }
}
new VueComp();