$(document).ready(function() {
    var zTreeObj;
    // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
    // function addHoverDom(treeId, treeNode) {
    function addDiyDom(treeId, treeNode) {
        var aObj = $("#" + treeNode.tId + "_a");
        if ($("#diyBtn_" + treeNode.id).length > 0) return;
        var editStr = "<span id='diyBtn_space_" + treeNode.id + "' > </span>" + "<button type='button' class='diyBtn1' id='diyBtn_" + treeNode.id + "' title='" + treeNode.name + "' onfocus='this.blur();'></button>";
        aObj.append(editStr);
        var btn = $("#diyBtn_" + treeNode.id);
        if (btn) btn.bind("click", function() {
            alert("diy Button for " + treeNode.name);
        });
    };
var setting = {
    view: {
        addDiyDom: addDiyDom
    },
    check: {
        enable: true,
        chkStyle: "checkbox",
        chkboxType: {
            //Y 属性定义 checkbox 被勾选后的情况； 
            // N 属性定义 checkbox 取消勾选后的情况； 
            // "p" 表示操作会影响父级节点； 
            // "s" 表示操作会影响子级节点。
            "Y": "p",
            "N": "s"
        }
    }
};
// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
var zNodes = [{
    name: "test1",
    open: true,
    children: [{
        name: "test1_1"
    }, {
        name: "test1_2"
    }]
}, {
    name: "test2",
    open: false,
    children: [{
        name: "test2_1"
    }, {
        name: "test2_2"
    }]
}]; zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});