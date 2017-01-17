define(['selectList'], function(selectPakage) {
    var selectOption = {
        isSearch: true, //是否显示搜索框
        multiple: true, //是否多选
        width: '300px', //长度
        actionBox: true, //是否展示全选、取消按钮
        title: '请选择你的...', //默认提示
        dataSize: 5, //最多显示个数，数据多时会有滚动条
    };
    selectPakage.selectList.option($(".selectMenu"),selectOption);
});