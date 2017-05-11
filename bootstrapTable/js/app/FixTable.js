/**
 * 1、最下面的是原始的Table。
2、用左边的table覆盖在上层，命名为tableColumn。
3、用上部的table覆盖在更上层，命名为tableHead。
4、在左上角覆盖固定不动的table，命名为tableFix。
自然在各自的外层都要用div框起来，以便后面的浮动和覆盖等等，所以结构的html如下：
<div id="MyTable_tableLayout"> <div id="MyTable_tableFix"> <table id="MyTable_tableFixClone" border="1" cellspacing="0" cellpadding="0"></table> </div> <div id="MyTable_tableHead"> <table id="MyTable_tableHeadClone" border="1" cellspacing="0" cellpadding="0"></table> </div> <div id="MyTable_tableColumn"> <table id="MyTable_tableColumnClone" border="1" cellspacing="0" cellpadding="0"></table> </div> <div id="MyTable_tableData"> <table id="MyTable" border="1" cellspacing="0" cellpadding="0"></table> </div> </div> 
 */
define(['jquerymigrate'], function() {
    /**
     * [FixTable description]
     * @param {[type]} TableID         [若id="table"则TableID="table"]
     * @param {[type]} ColumnIndex     [int,从0开始]
     * @param {[type]} FixColumnNumber [int]
     * @param {[type]} width           [$(".bootstrap-table .fixed-table-body").width()]
     * @param {[type]} height          [$(".bootstrap-table .fixed-table-body").height()]
     * 如果宽高好原table的框高不一致，会出错
     */
    var FixTable = function(TableID, ColumnIndex, FixColumnNumber, width, height) {
        /// <summary>
        ///     锁定表头和列
        ///     <para> sorex.cnblogs.com </para>
        /// </summary>
        /// <param name="TableID" type="String">
        ///     要锁定的Table的ID
        /// </param>
        /// <param name="ColumnIndex" type="Number">
        ///     要锁定第几列开始
        /// </param>
        /// <param name="FixColumnNumber" type="Number">
        ///     要锁定列的个数
        /// </param>
        /// <param name="width" type="Number">
        ///     显示的宽度
        /// </param>
        /// <param name="height" type="Number">
        ///     显示的高度
        /// </param>

        //首先创建上面所诉的框架出来
        if ($("#" + TableID + "_tableLayout").length != 0) {
            $("#" + TableID + "_tableLayout").before($("#" + TableID));
            $("#" + TableID + "_tableLayout").empty();
        } else {
            $("#" + TableID).after("<div id='" + TableID + "_tableLayout' style='overflow:hidden;height:" + height + "px; width:" + width + "px;'></div>");
        }

        $('<div id="' + TableID + '_tableFix"></div>' + '<div id="' + TableID + '_tableHead"></div>' + '<div id="' + TableID + '_tableColumn"></div>' + '<div id="' + TableID + '_tableData"></div>').appendTo("#" + TableID + "_tableLayout");


        var oldtable = $("#" + TableID);

        var tableFixClone = oldtable.clone(true);
        tableFixClone.attr("id", TableID + "_tableFixClone");
        $("#" + TableID + "_tableFix").append(tableFixClone);
        var tableHeadClone = oldtable.clone(true);
        tableHeadClone.attr("id", TableID + "_tableHeadClone");
        $("#" + TableID + "_tableHead").append(tableHeadClone);
        var tableColumnClone = oldtable.clone(true);
        tableColumnClone.attr("id", TableID + "_tableColumnClone");
        $("#" + TableID + "_tableColumn").append(tableColumnClone);
        $("#" + TableID + "_tableData").append(oldtable);

        $("#" + TableID + "_tableLayout table").each(function() {
            $(this).css("margin", "0");
        });

        //计算tableFix，tableHead的高度
        var HeadHeight = $("#" + TableID + "_tableHead thead").height();
        HeadHeight += 2;
        $("#" + TableID + "_tableHead").css("height", HeadHeight);
        $("#" + TableID + "_tableFix").css("height", HeadHeight);

        //计算tableFix，tableColumn的宽度
        var ColumnsWidth = 0,
            ColumnsWidthFix = 0;
        var ColumnsNumber = 0,
            ColumnsNumberFix = 0;
        for (var i = ColumnIndex; i < ColumnIndex + FixColumnNumber; i++) {
            var $tdLength = $("#" + TableID + "_tableColumn tr:last td").eq(i);
            ColumnsWidth += $tdLength.outerWidth(true);
            ColumnsNumber++;
        }
        $("#" + TableID + "_tableColumn tr:last td:lt(" + ColumnIndex + ")").each(function() {
            ColumnsWidthFix += $(this).outerWidth(true);
            ColumnsNumberFix++;
        });
        // ColumnsWidth += 2;
        // ColumnsNumberFix += 2;
        ColumnsWidth = browserMise(ColumnsNumber, ColumnsWidth);
        ColumnsWidthFix = browserMise(ColumnsNumberFix, ColumnsWidthFix);

        function browserMise(ColumnsNumber, ColumnsWidth) {
            ColumnsWidth += 2;
            if ($.browser.msie) {
                switch ($.browser.version) {
                    case "7.0":
                        if (ColumnsNumber >= 3) ColumnsWidth--;
                        break;
                    case "8.0":
                        if (ColumnsNumber >= 2) ColumnsWidth--;
                        break;
                }
            }
            return ColumnsWidth;
        }

        $("#" + TableID + "_tableColumn").css("width", ColumnsWidth);
        $("#" + TableID + "_tableFix").css("width", ColumnsWidth);

        //为tableHead和tableColumn添加联动的滚动条事件
        $("#" + TableID + "_tableData").scroll(function() {
            $("#" + TableID + "_tableHead").scrollLeft($("#" + TableID + "_tableData").scrollLeft());
            $("#" + TableID + "_tableColumn").scrollTop($("#" + TableID + "_tableData").scrollTop());
        });

        //为较小的table修正样式
        $("#" + TableID + "_tableFix").css({
            "overflow": "hidden",
            "position": "absolute",
            "top": 0,
            "left": ColumnsWidthFix + 2,
            "z-index": "50",
            "background-color": "Silver"
        });
        $("#" + TableID + "_tableFixClone").css({
            "position": "absolute",
            "top": 0,
            "left": -(ColumnsWidthFix + 1),
            // "z-index": "50",
        });
        $("#" + TableID + "_tableHead").css({
            "overflow": "hidden",
            "width": width - 17,
            "position": "relative",
            "z-index": "45",
            "background-color": "Silver"
        });
        $("#" + TableID + "_tableColumn").css({
            "overflow": "hidden",
            "height": height - 17,
            "position": "absolute",
            "top": 0,
            "left": ColumnsWidthFix + 2,
            "z-index": "40",
            "background-color": "Silver"
        });
        $("#" + TableID + "_tableColumnClone").css({
            "position": "absolute",
            "top": 0,
            "left": -(ColumnsWidthFix + 1)
        });
        $("#" + TableID + "_tableData").css({
            "overflow": "scroll",
            "width": width,
            "height": height,
            "position": "relative",
            "z-index": "35"
        });

        //为整体添加样式，定位
        if ($("#" + TableID + "_tableHead").width() > $("#" + TableID + "_tableFix table").width()) {
            $("#" + TableID + "_tableHead").css("width", $("#" + TableID + "_tableFix table").width());
            $("#" + TableID + "_tableData").css("width", $("#" + TableID + "_tableFix table").width() + 17);
        }
        if ($("#" + TableID + "_tableColumn").height() > $("#" + TableID + "_tableColumn table").height()) {
            $("#" + TableID + "_tableColumn").css("height", $("#" + TableID + "_tableColumn table").height());
            $("#" + TableID + "_tableData").css("height", $("#" + TableID + "_tableColumn table").height() + 17);
        }


        // $("#" + TableID + "_tableFix").offset($("#" + TableID + "_tableLayout").offset());
        $("#" + TableID + "_tableHead").offset($("#" + TableID + "_tableLayout").offset());
        // $("#" + TableID + "_tableColumn").offset($("#" + TableID + "_tableLayout").offset());
        $("#" + TableID + "_tableData").offset($("#" + TableID + "_tableLayout").offset());
    }

    return {
      "fixtable":FixTable
    }
});