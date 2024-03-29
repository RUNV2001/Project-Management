

var ProjectListObject = [
    {
        name: 'Project one'
    },
    {
        name: 'Project two'
    }
]

var boardList = [];

function ProjectBoard(Listid) {
    ProjectListObject.forEach(function(value, index) {
        var template = '<div class="board-card">' + value.name +
            ' <ul>' +
            ' <li class="taskList">Task One</li>' +
            '<li class="taskList">Task Two</li>' +
            '</ul>' +
            '</div>';
        document.getElementById(Listid).innerHTML += template;
    });

}

function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];
    if (toggleVariable.style.display == 'none') {
        toggleVariable.style.display = 'block';
    } else {
        toggleVariable.style.display = 'none';
    }
}

function removeCard(Boardid) {
    var boardElement = document.getElementById(Boardid);
    boardElement.parentNode.removeChild(boardElement);
}

var idName = 0;

function addBoard(id) {
    if (id.value.length <= 5) {
        alert('board name should not be less than 5 letters....!');
        return;
    } else {
        idName++;
        if (id.value)
            var Listid = 'Project_' + idName;
        var Boardid = 'Board_' + idName;
        var templateBlock = '<section class="MainBoard" id="' + Boardid + '">' +
            ' <div class="removecard">' + id.value + '<button id="removebtn" onclick="removeCard(\'' + Boardid + '\')">Remove boards</button></div>' +
            '<div class="board-block" id="' + Listid + '">' +

            '</div>' +
            '</section>';
        boardList.push({
            List_id: Listid,
            board_id: Boardid,
            templateNew: templateBlock
        });
        document.getElementById('boardBlockList').innerHTML += templateBlock;
        ProjectBoard(Listid);
        document.getElementById('menuList').innerHTML += '<li onClick="loadMenu(\'' + Boardid + '\')">' + id.value + '<hr></li>';
        alert('board Name' + ' -- ' + id.value + ' -- ' + 'has sucessfully added....!');
        id.value = '';
    }
}

function loadMenu(element) {
    for (var i = 0; i < boardList.length; i++) {
        if (boardList[i].board_id == element) {
            document.getElementById(boardList[i].board_id).style.display = 'block';
        } else {
            document.getElementById(boardList[i].board_id).style.display = 'none';
        }
    }
}
