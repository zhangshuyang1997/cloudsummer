var clients = [
    { "name": "11603080201", "state": "小白", "salary": "计算机科学与工程专业", "grade": "100", "room": 2016, "telnum": 3, "keywords": 19 },
    { "name": "11603080202", "state": "小青", "salary": "计算机科学与工程专业", "grade": "90", "room": 2016, "telnum": 3, "keywords": 19 },
    { "name": "11603080203", "state": "小红", "salary": "计算机科学与工程专业", "grade": "11", "room": 2016, "telnum": 1, "keywords": 19 },
    { "name": "11603080204", "state": "小蓝", "salary": "计算机科学与工程专业", "grade": "20", "room": 2016, "telnum": 4, "keywords": 19 },
    { "name": "11603080205", "state": "小橙", "salary": "计算机科学与工程专业", "grade": "80", "room": 2016, "telnum": 5, "keywords": 19 },
    { "name": "11603080206", "state": "小黄", "salary": "计算机科学与工程专业", "grade": "40", "room": 2016, "telnum": 1, "keywords": 19 },
    { "name": "11603080207", "state": "小靛", "salary": "计算机科学与工程专业", "grade": "60", "room": 2016, "telnum": 6, "keywords": 19 },
    { "name": "11603080208", "state": "小绿", "salary": "计算机科学与工程专业", "grade": "92", "room": 2016, "telnum": 4, "keywords": 19 },
    { "name": "11603080209", "state": "小粉", "salary": "计算机科学与工程专业", "grade": "93", "room": 2016, "telnum": 2, "keywords": 19 },
    { "name": "11603080210", "state": "小紫", "salary": "计算机科学与工程专业", "grade": "94", "room": 2016, "telnum": 8, "keywords": 19 },
    { "name": "11503080211", "state": "小黑", "salary": "计算机科学与工程专业", "grade": "99", "room": 2015, "telnum": 4, "keywords": 20 },
    { "name": "11603080212", "state": "小金", "salary": "计算机科学与工程专业", "grade": "100", "room": 2016, "telnum": 5, "keywords": 19 },
];
//checkbox被选中集合
var selections = [];

//新增按钮事件
var newBtn = document.getElementById('new');
newBtn.onclick = function() {
    document.getElementById('name').value = "";
    document.getElementById('state').value = "";
    document.getElementById('salary').value = "";
    document.getElementById('grade').value = "";
    document.getElementById('room').value = "";
    document.getElementById('telnum').value = "";
    document.getElementById('keywords').value = "";
    document.getElementById('inTitle').innerHTML = "INFORMATION";
    document.getElementById("define").style.display = "inline";
    document.getElementById("all").style.display = "block";
    document.getElementById("updatedefine").style.display = "none";
}

//叉图片事件
var cancelImg = document.getElementById('imgCancel');
cancelImg.onclick = function() {
    document.getElementById("all").style.display = "none";
}

//取消按钮事件
var cancelBtn = document.getElementById('cancel');
cancelBtn.onclick = function() {
    $("#name").attr("readOnly",false);
    $("#state").attr("readOnly",false);
    $("#salary").attr("readOnly",false);
    $("#grade").attr("readOnly",false);
    $("#room").attr("readOnly",false);
    $("#telnum").attr("readOnly",false);
    $("#keywords").attr("readOnly",false);
    document.getElementById("updatedefine").style.display = "none";
    document.getElementById("define").style.display = "none";
    document.getElementById("all").style.display = "none";
}

//新增确定按钮事件
var defineBtn = document.getElementById('define');
defineBtn.onclick = function() {
    if(confirm("Are you sure?")) {
        var name = document.getElementById('name').value;
        var state = document.getElementById('state').value;
        var salary = document.getElementById('salary').value;
        var grade = document.getElementById('grade').value;
        var room = document.getElementById('room').value;
        var telnum = document.getElementById('telnum').value;
        var keywords = document.getElementById('keywords').value;
    
        //Json字符串拼接
        var result = "{"+"\""+"name"+"\""+":"+"\""+name+"\""+","+"\""+"state"+"\""+":"+"\""+state+"\""+","+"\""+"salary"+"\""+":"+"\""+salary+"\""+","+"\""+"grade"+"\""+":"+"\""+grade+"\""+","+"\""+"room"+"\""+":"+"\""+room+"\""+","+"\""+"telnum"+"\""+":"+"\""+telnum+"\""+","+"\""+"keywords"+"\""+":"+"\""+keywords+"\""+"}"; 
        //字符串转json，并添加在数组的第一个
        clients.unshift(JSON.parse(result));
        $('#table').bootstrapTable('load',clients);
        document.getElementById("define").style.display = "none";
        document.getElementById("all").style.display = "none";
    } else {
        //Do something
    }
}

function operateFormatter(value, row, index) {
    return [
        '<img class="upData" src="4.png" style="margin-right:30px;"></img>',
        '<img class="sinDel" src="5.png" style="margin-right:5px;"></img>'
//        '<button type="button" class="sinDel btn btn-primary btn-sm" style="margin-left:5px;">删除</button>'
    ].join('');
}

window.operateEvents = {
    'click .upData': function (e, value, row, index) {
        document.getElementById('inTitle').innerHTML = "UPDATE";
        document.getElementById('name').value = row.name;
        document.getElementById('state').value = row.state;
        document.getElementById('salary').value = row.salary;
        document.getElementById('grade').value = row.grade;
        document.getElementById('room').value = row.room;
        document.getElementById('telnum').value = row.telnum
        document.getElementById('keywords').value = row.keywords;
        document.getElementById("all").style.display = "block";
        document.getElementById("define").style.display = "none";
        document.getElementById("updatedefine").style.display = "inline";
        //修改确定按钮事件
        $('#updatedefine').on('click',function(){
            if(confirm("Are you sure?")) {
                $('#table').bootstrapTable('updateRow', {  
                    index: index,  
                    row: {  
                        name : document.getElementById('name').value,
                        state : document.getElementById('state').value,
                        salary : document.getElementById('salary').value,
                        grade : document.getElementById('grade').value,
                        room : document.getElementById('room').value,
                        telnum : document.getElementById('telnum').value,
                        keywords : document.getElementById('keywords').value,
                    }  
                });  
                $('#table').bootstrapTable('load', clients);
                document.getElementById("updatedefine").style.display = "none";
                document.getElementById("all").style.display = "none";
                index = null;
            } else {
                //Do something
            }
        })
    },
    'click .sinDel': function (e, value, row, index) {
        if(confirm("Are you sure?")) {
            $('#table').bootstrapTable('remove', {
                field: 'name',
                values: [row.name]
            });
        } else {
            //Do something
        }
    }
};

$('#table').bootstrapTable({
    data: clients,
    showRefresh: true,
    clickToSelect: false,
    striped: true,
    columns: [{
        checkbox: true
    },{  
        title: 'No.',
        align: 'center',
        valign: 'middle',
        formatter: function (value, row, index) {  
            return index + 1;  
        }
    },{
        field: 'name',
        title: 'NAME',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'state',
        title: 'STATE',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'salary',
        title: 'SALARY',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'grade',
        title: 'GRADE',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'room',
        title: 'ROOM',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'telnum',
        title: 'TELNUM',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'keywords',
        title: 'KEYWORDS',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'operate',
        title: 'OPERATE',
        align: 'center',
        valign: 'middle',
        width : 200,
        events: operateEvents,
        formatter: operateFormatter,
    }],
});

//复选框响应事件
$('#table').on('check.bs.table uncheck.bs.table ' + 'check-all.bs.table uncheck-all.bs.table', function () {
    $('#delete').prop('disabled', !$('#table').bootstrapTable('getSelections').length);
    selections = getIdSelections();
});

$('#delete').click(function () {
    var ids = getIdSelections();
    $('#table').bootstrapTable('remove', {
        field: 'name',
        values: ids
    });
    $('#delete').prop('disabled', true);
});

function getIdSelections() {
    return $.map($('#table').bootstrapTable('getSelections'), function (row) {
        return row.name
    });
}




  
