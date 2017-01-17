define(['table', 'bootstrapExport', 'tableExport', 'fileSave', 'contextMenu'], function() {
    var $table = $("#table");
    var tableData = [],
        tableColumn = [];
    var operateEvent = { //要放在commonrow之前，因为是赋值函数，要置前
        'click .edit': function(event, value, row, index) {
            console.log("edit:", row);
        },
        'click .remove': function(event, value, row, index) {
            console.log("remove:", row);
        }
    }
    var state = {
            field: 'state',
            checkbox: 'true',
            align: 'center',
            valign: 'middle'
        },
        commonrow = {
            field: 'operate',
            title: '操作',
            width: '50px',
            align: 'center',
            events: operateEvent,
            formatter: operateFormatter
        };

    function operateFormatter(value, row, index) {
        return [
            '<a class="edit" href="javascript:void(0)" title="编辑">',
            '<i class="glyphicon glyphicon-heart"></i>',
            '</a> ',
            '<a class="remove" href="javascript:void(0)" title="删除">',
            '<i class="glyphicon glyphicon-remove"></i>',
            '</a>'
        ].join("");
    }
    tableColumn.push(state);
    tableColumn.push({
        field: 'id',
        title: 'Item ID',
        class: 'abc',
        sortable: 'true',
        width: '40px',
    });
    tableColumn.push({
        field: 'name',
        title: 'Item Name',
        class: 'abc',
        sortable: 'true',
        width: '40px',
    });
    tableColumn.push({
        field: 'price',
        title: 'Item Price',
        class: 'abc',
        sortable: 'true',
        width: '40px',

    }); //sortable用来显示表格可以手动排序
    tableColumn.push(commonrow);
    for (var i = 0; i < 50; i++) {
        tableData.push({
            id: i,
            name: 'Item' + Math.floor(i * Math.random()),
            price: '$' + Math.round(i * Math.random())
        });
    }
    console.log("tableData:", tableData, "  tableColumn:", tableColumn);
    $table.bootstrapTable({
        singleSelect: false, //设置True 将禁止多选
        striped: true, //设置隔行变色
        clickToSelect: true, //设置true 将在点击行时，自动选择rediobox 和 checkbox
        sortable: true, //是否启用排序
        sortOrder: 'asc', //定义排序方式 'asc' 或者 'desc'
        sortName: 'price', //定义排序列,通过url方式获取数据填写字段名，否则填写下标
        // queryParams:function(params){//用来向后台传请求参数,有queryParams就不用data:
        //     $.extend(params,searchParams());//searchParams返回的是参数格式  return {N_id:abc}
        //     return params;
        // },
        // url:'docmanage/query',//请求接口
        /*导出*/
        showExport: true,
        exportDataType: "basic", //basic,all,selected
        // exportTypes:['excel'],//['json', 'xml', 'csv', 'txt', 'sql', 'excel']
        exportOptions: "测试文档",
        /*导出结束*/
        contextMenu: '#context-menu',//右键菜单
        onContextMenuItem: function(row, $el) {
            if ($el.data("item") == "edit") {
                alert(row.id);
            }
        },//右键菜单
        detailView: true, //详细查看按钮
        detailFormatter: detailFormatter, //显示详细查看数据
        columns: tableColumn, //列数据,也可以通过函数来获取
        data: tableData, //表格数据
        // onLoadSuccess:function(data){//请求成功，返回数据
        //     // 数据操作
        //     // 自动显示过长的数据
        //     var arrow=$(".abc");
        //     $.each(arrow, function(index, val) {
        //          /* iterate through array or object */
        //          $(this).attr("title": val.innerText);
        //     });
        // }
    });

    function detailFormatter(index, row) {
        var html = [];
        $.each(row, function(key, value) {
            html.push('<p><b>' + key + ':</b> ' + value + '</p>');
        });
        return html.join('');
    }

});