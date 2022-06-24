const dropdown = document.querySelector('.dropdown');
const toggleButton = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const nextButton = document.querySelector('.next-button');

// 토글 버튼이 클릭 -> 메뉴를 보여준다
// 메뉴 max-height: 0
// 메뉴.show -> 해지
toggleButton.addEventListener('click', function() {
  menu.classList.toggle('show'); // add 해도 되지만, toggle로 원샷 투킬.
})

// classList.toggle(string [, force])
// 하나의 인수만 있을 때: 클래스 값을 토글링한다. 즉, 클래스가 존재한다면 제거하고 flase를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환한다.
// 그러니까 show라는 클래스가 menu에 있으면 제거해주고,
// 없으면 추가해준다는 거잖아??? 와우~
// -> 버튼을 누를 때마다, show가 있으면 show를 없애주고, show가 없으면 show를 넣어준다!!!

toggleButton.addEventListener('blur', function() {
  menu.classList.remove('show'); //
})

// 아래 이벤트리스너 함수에서 클래스 제거한다고 써도 제거는 된다.
// 그러나 사용자 입장에서, 메뉴를 고르려다가 안 고르고 그냥 배경(body부분)을 눌렀을 때도 열린 토글 드롭다운 메뉴가 사라지길 기대한다.
// 옵션에서 하나 클릭했을 때만 show 클래스가 삭제되게 한다면, 위와 같은 효과가 안 난다.
// 이럴 때 사용하는 이벤트가 'blur'.
// blur는 focus가 해제되는 찰나의 순간을 말한다.
// focus는 마우스로 그 요소를 클릭한 순간부터 시작된다.
// 마우스로 다른 요소를 클릭하면 focus 상태가 끝나고, 새로 클릭한 요소가 focus 상태가 된다.
// 그렇게 다른 요소를 클릭해서 focus 상태가 해제되고 blur가 상태가 될 때, show 클래스가 삭제되도록 한다면, 화면에서 옵션이 아닌 다른 부분을 눌렀을 때도 드롭다운 메뉴가 사라지게 할 수 있다!

// 또, 드롭다운 메뉴가 나오게 하려면 '선택해주세요' 버튼을 눌러야 한다. = 그 버튼이 focus된 상태.
// 이때 원하는 지점을 선택한다 = 원하는 지점의 이름이 적힌 버튼을 누른다 = 그 버튼이 focus 상태가 된다. = 이전에 눌렀던 버튼은 focus 해제되고 blur 상태가 된다! = show 클래스가 제거된다 = 드롭다운 메뉴가 사라진다!

// 그러면.. 처음에 toggle 속성 써야 할 이유가 있나??

// 하나하나에 접근하는 스마트한 방법: forEach였다!!!!
options.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const buttonLabel = e.currentTarget.innerText;
    toggleButton.innerText = buttonLabel; // 글자끼리만 바꿔치기 해준다! 스마트하게 위 줄 코드에서 새로운 변수에 넣어준 뒤에!
    toggleButton.classList.add('selected'); // 위까지만 하면 '선택해주세요'에서 '김버그피자 ~점'으로 글자만 바뀌고 스타일(색깔!)은 안 바뀌어서 여리여리한 회색 그대로다. 그걸 바꿔주려고 찾아보니 CSS에 slected 클래스 부여한 스타일링이 있네. 이걸 이때 쓰라고 만들어 놓은 거구나! 그리고 이때는 누를 때 클래스 있으면 없애고 없으면 추가하고 하는 게 아니라, 항상 이 클래스를 부여해줘야 하므로, toggle이 아니라 add를 사용한다.
    nextButton.removeAttribute('disabled');
  })
})

// 셋째 줄에 const buttonLabel = e.currentTarget.textContent를 하고, 바로 아래 줄에 console.log(buttonLabel)을 써서 buttonLabel을 찍어보면, 엄청난 공백까지 합쳐진 텍스트가 찍힌다.
// html에서 가독성 위해 줄바꾸고 들여쓰기 한 공백들까지 텍스트이기 때문이다.
// 이럴 때 공백을 없애고 글자만 얻을 수 있는 메소드가 있다. : trim()
// const buttonLabel = e.currentTarget.textContent.trim() 이렇게 해주면 공백 빼고 문자만 반환해준다. 콘솔에 찍어서 확인해보라.

// 그런데 innerText로 하면 공백이 애초에 안 나오는 것 같다!


// 댓글들 말대로 저렇게 하니까 마지막 두 개 옵션은 클릭이 안 된다. 뭐 때문일까?

// 고정 댓글에서 말하신 내용도 잘 모르겠다.

// target과 currentTarget 설명 한 번 다시 듣고 자야겠다.
