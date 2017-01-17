define([],function(){
   function name(scope,person){
      this.person="你的名字是："+person;
      scope.name=this.person;
   }
    
   function num(scope,n){
      this.n=n*n;
      scope.number=this.n;
   }
   function abc(a){
      return a*a*a;
   }
   return{
      "names":name,
      "number":num,
      "ABC":abc
   }
});