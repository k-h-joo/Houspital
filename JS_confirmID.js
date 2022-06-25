function confirmID() {
    var id = document.getElementById('id');

    if (id.value == 'private' || id.value == 'hospital') {
        alert('이미 등록된 아이디입니다');
    }
    else {
        alert('사용 가능한 아이디입니다');
    }
}