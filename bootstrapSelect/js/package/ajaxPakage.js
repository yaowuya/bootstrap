// 封装ajax
define(['jquery'],function($){
    
    var Ajax={
        request:function(config){
            $.ajax({
                url: config.url,
                type:config.type||'post',
                dataType: config.dataType||'json',
                data:config.data || {},
                timeout:config.timeout||30000,
                cache:false,
                async:true,
                success:function(response){
                   if(config.success){
                      config.success(response);
                   }
                },
                error:function(response){
                   if(config.error){
                      config.error(response);
                   }
                }
            });     
        }
    }
    return {
        'Ajax':Ajax
    }
});