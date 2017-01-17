// 模块加载配置
require.config({
   baseUrl:'./js/',
   paths:{
      "jquery":"plugins/jquery-3.1.1.min",
      "bootstrap":"plugins/bootstrap.min",
      "angular":"plugins/angular-1.3.0",
      "numm":"app/numm"
   },
   shim:{
      // "demo1":{
      //   deps:['angular'],
      //   exports:"Category"  //暴露出一个方法
      // }
   }
})