<style>
     h2{
         color: red;
     }
 </style>
 <template>
     <h2>hello, {{name}}</h2>
     <input v-model="name">
     <ul>
         <li v-for="item in items">
             {{ item.message }}
         </li>
     </ul>
 </template>
 <script>
     //  构造弹窗组件
     module.exports = {
         data: function(){
             return {
                 name: "western-ranger",
                 items: 'ajax_text'
             };
         },
         asyncData: function (resolve, reject) {
             this.$http.post('/comment', {id:1}, {
                 headers: {
                     "X-Requested-With": "XMLHttpRequest"
                 },
                 emulateJSON: true//以form data形式
             }).then(function(response) {
                 var data = response.data;
                 resolve({
                     items: data.demoArr
                 });
             }, function(response) {
                 // handle error
             });
         },
     };
 </script>