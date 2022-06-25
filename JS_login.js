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

