function Login() {
    var id = document.getElementById('id');
    var pw = document.getElementById('pw');
    var login = document.getElementById('login');
    var link = '#';

    if (id.value == 'private' || id.value == 'hospital') {
        if (id.value == 'private' && pw.value == '1111') {
            
            url = './private_main.html'
            window.location.href = url;
        }
        else if (id.value == 'hospital' && pw.value == '2222') {
            link = './hospital_main.html';
            window.location.href = link;
        }
        else {
            alert('아이디와 비밀번호를 다시 한 번 확인해주세요.')
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }
}

function Find_id() {
    var name = document.getElementById('inputName');
    var num = document.getElementById('inputNum');
    var id = '#'

    if (name.value == '김현주' || name.value == '손동우') {
        if (name.value == '김현주' && num.value == '01088577056') {
            id = 'hospital'
            alert('ID: ' + id);
        }
        else if (name.value == '손동우' && num.value == '01049181275') {
            id = 'private';
            alert('ID: ' + id);
        }
        else {
            alert('이름과 전화번호를 다시 한 번 확인해주세요.')
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }
}

function Find_pw() {
    var id = document.getElementById('inputId');
    var num = document.getElementById('inputNum');
    var pw = '#'

    if (id.value == 'hospital' || id.value == 'private') {
        if (id.value == 'hospital' && num.value == '01088577056') {
            pw = '2222'
            alert('PW: ' + pw);
        }
        else if (id.value == 'private' && num.value == '01049181275') {
            pw = '1111';
            alert('PW: ' + pw);
        }
        else {
            alert('아이디와 전화번호를 다시 한 번 확인해주세요.')
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }
}

function confirmID() {
    var id = document.getElementById('id');

    if (id.value == 'private' || id.value == 'hospital') {
        alert('이미 등록된 아이디입니다');
    }
    else {
        alert('사용 가능한 아이디입니다');
    }
}