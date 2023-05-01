// HTML 요소(Element) 1개 검색
let boxEl = document.querySelector('.box');


// click event 등록
boxEl.addEventListener('click', function() {
    console.log('Clicked!!');
    boxEl.classList.add('active'); // javascript로 div class 요소 추가함
    console.log(
        boxEl.classList.contains('active') // active라는 클래스가 있는지 검사 = true
    );
    boxEl.classList.remove('active'); // active class 삭제
    console.log(
        boxEl.classList.contains('active') // active라는 클래스가 있는지 검사 = false
    );
});