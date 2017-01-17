define(['datepicker', 'dateLang'], function() {
    $('.form_datetime').datetimepicker({
        language: 'zh-CN', //语言
        weekStart: 0, //一周从哪一天开始。0（星期日）到6（星期六）
        todayBtn: true, //如果此值为true 或 "linked"，则在日期时间选择器组件的底部显示一个 "Today" 按钮用以选择当前日期。如果是true的话，"Today" 按钮仅仅将视图转到当天的日期，如果是"linked"，当天日期将会被选中。
        autoclose: true, //当选择一个日期之后是否立即关闭此日期时间选择器。
        todayHighlight: true, //如果为true, 高亮当前日期。
        startView: 2, //日期时间选择器打开之后首先显示的视图。 可接受的值：
        // 0 or 'hour' for the hour view
        // 1 or 'day' for the day view
        // 2 or 'month' for month view (the default)
        // 3 or 'year' for the 12-month overview
        // 4 or 'decade' for the 10-year overview. Useful for date-of-birth datetimepickers.
        minView: 0, //日期时间选择器所能够提供的最精确的时间选择视图。
        maxView: 4, //日期时间选择器最高能展示的选择范围视图。
        forceParse: 0, //当选择器关闭的时候，是否强制解析输入框中的值。也就是说，当用户在输入框中输入了不正确的日期，选择器将会尽量解析输入的值，并将解析后的正确值按照给定的格式format设置到输入框中。
        pickerPosition: "bottom-left", // 默认值: 'bottom-right' (还支持 : 'bottom-left') 此选项当前只在组件实现中提供支持。通过设置选项可以讲选择器放倒输入框下方。
        format: "yyyy-mm-dd hh:ii p", //日期格式
        startDate: "2013-02-14 10:00", //日历开始日期
        minuteStep: 10, //分钟间隔时间
        linkField: "mirror_field",
        linkFormat: "yyyy-mm-dd hh:ii",
    });
});