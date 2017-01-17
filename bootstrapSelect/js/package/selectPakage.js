// 封装从后台获取数据的bootstrapselect
define(['Ajax', 'bootstrapSelect'], function(ajaxPakage) {
    var info = [],
        $options = "",
        options = {},
        baseOptions = { //默认参数
            isSearch: true, //是否显示搜索框
            multiple: true, //是否多选
            width: '150px', //长度
            actionBox: true, //是否展示全选、取消按钮
            title: '请选择', //默认提示
            dataSize: 5, //最多显示个数，数据多时会有滚动条
        };
    for (var i = 0; i < 20; i++) {
        info.push({
            "S_FUNDCODE": Math.round(i * Math.random()),
            "S_FUNDNAME": "小明" + i
        });
    }

    var setSelectList = {
        option: function($select, selectOption) {
            $.extend(baseOptions, selectOption);
            // if (info.length == 0) {
            // ajaxPakage.Ajax.request({
            //     url: '',
            //     success: function(response) {
            //         var successData = response.data;
            //         info = response.data;
            //         $.each(successData, function(index, item) { //后台返回值
            //             options[item.S_FUNDCODE] = "<option value='" + item.S_FUNDCODE + "' data-subtext='" + item.S_FUNDCODE + "'>" + item.S_FUNDNAME + "</option>"
            //         });
            //         LoadInfoOption($select, []);
            //     }
            // });
            $.each(info, function(index, item) {
                /* iterate through array or object */
                $options+= "<option value='" + item.S_FUNDCODE + "' data-subtext='" + item.S_FUNDCODE + "'>" + item.S_FUNDNAME + "</option>";
            });
            console.log($options);
            LoadInfoOption($select, []);
            // } else {
            //     LoadInfoOption($select, []);
            // }
            // }
        }
    }

    function LoadInfoOption($select, selected) { //可以进行其他操作
        setOptions($select);
        $select.empty().append($options).selectpicker("refresh");
    }

    function setOptions($select) {
        $select.addClass('my-select');
        if (baseOptions.isSearch) {
            $select.attr("data-live-search", "true");
        } else {
            $select.removeAttr("data-live-search");
        }
        if (baseOptions.multiple) {
            $select.attr('multiple', 'true');
        } else {
            $select.removeAttr('multiple');
        }
        if (baseOptions.actionBox) {
            $select.attr('data-actions-box', 'true');
        } else {
            $select.removeAttr('data-actions-box');
        }

        $select.attr('data-width', baseOptions.width);
        $select.attr('title', baseOptions.title);
        $select.attr('data-size', baseOptions.dataSize);
    }

    return {
        "selectList": setSelectList
    }
});