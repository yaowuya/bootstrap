define(['fixedcolumns'], function() {
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
            width: '200px',
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
        width: '150px',
    });
    tableColumn.push({
        field: 'name',
        title: 'Item Name',
        class: 'abc',
        sortable: 'true',
        width: '150px',
    });
    tableColumn.push({
        field: 'name1',
        title: 'Item Name1',
        class: 'abc',
        sortable: 'true',
        width: '150px',
    });
    tableColumn.push({
        field: 'name2',
        title: 'Item Name2',
        class: 'abc',
        sortable: 'true',
        width: '150px',
    });
    tableColumn.push({
        field: 'name3',
        title: 'Item Name3',
        class: 'abc',
        sortable: 'true',
        width: '150px',
    });
    tableColumn.push({
        field: 'name4',
        title: 'Item Name4',
        class: 'abc',
        sortable: 'true',
        width: '150px',
    });
    tableColumn.push({
        field: 'name5',
        title: 'Item Name5',
        class: 'abc',
        sortable: 'true',
        width: '150px',
    });
    tableColumn.push({
        field: 'name6',
        title: 'Item Name6',
        class: 'abc',
        sortable: 'true',
        width: '150px',
    });
    tableColumn.push({
        field: 'name7',
        title: 'Item Name7',
        class: 'abc',
        sortable: 'true',
        width: '150px',
    });
    tableColumn.push({
        field: 'name8',
        title: 'Item Name8',
        class: 'abc',
        sortable: 'true',
        width: '150px',
    });
    tableColumn.push({
        field: 'name9',
        title: 'Item Name9',
        class: 'abc',
        sortable: 'true',
        width: '150px',
    });
    tableColumn.push({
        field: 'price',
        title: 'Item Price',
        class: 'abc',
        sortable: 'true',
        width: '150px',

    }); //sortable用来显示表格可以手动排序
    tableColumn.push(commonrow);
    for (var i = 0; i < 50; i++) {
        tableData.push({
            id: i,
            name: 'Item' + Math.floor(i * Math.random()),
            name1: 'Item' + Math.floor(i * Math.random()),
            name2: 'Item' + Math.floor(i * Math.random()),
            name3: 'Item' + Math.floor(i * Math.random()),
            name4: 'Item' + Math.floor(i * Math.random()),
            name5: 'Item' + Math.floor(i * Math.random()),
            name6: 'Item' + Math.floor(i * Math.random()),
            name7: 'Item' + Math.floor(i * Math.random()),
            name8: 'Item' + Math.floor(i * Math.random()),
            name9: 'Item' + Math.floor(i * Math.random()),
            price: '$' + Math.round(i * Math.random())
        });
    }
    // console.log("tableData:", tableData, "  tableColumn:", tableColumn);
    $table.bootstrapTable({
        singleSelect: false, //设置True 将禁止多选
        striped: true, //设置隔行变色
        clickToSelect: true, //设置true 将在点击行时，自动选择rediobox 和 checkbox
        sortable: true, //是否启用排序
        sortOrder: 'asc', //定义排序方式 'asc' 或者 'desc'
        sortName: 'price', //定义排序列,
        // height:'400px',
        detailView: true, //详细查看按钮
        detailFormatter: detailFormatter, //显示详细查看数据
        columns: tableColumn, //列数据,也可以通过函数来获取
        data: tableData, //表格数据
        fixedColumns: true,
        fixedNumber: 3,
    });
    
    function detailFormatter(index, row) {
        var html = [];
        $.each(row, function(key, value) {
            html.push('<p><b>' + key + ':</b> ' + value + '</p>');
        });
        return html.join('');
    }
    
    // FixTable("table",1,3,"748","317");

    $(".btn-get").on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        console.log("2");
        var getVal=$table.bootstrapTable("getAllSelections");
        console.log("1",getVal);
    });
});