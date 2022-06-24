// 요소 선택해두기
const $dropdownToggle = document.querySelector('.dropdown-toggle');
const $dropdownMenu = document.querySelector('.dropdown-menu');
const $dropdownOption = document.querySelectorAll('.dropdown-option');
const $nextButton = document.querySelector('.next-button');


// 토글 버튼 누르면 드롭다운 메뉴 나오게 하기
$dropdownToggle.addEventListener('click', clickHandler);

function clickHandler() {
  // $dropdownToggle.classList.remove('dropdown-toggle');
  // $dropdownToggle.classList.add('dropdown-toggle:active');
  $dropdownMenu.classList.add('show');
}

// 누르고 버튼 한 번 더 누르면 옵션들이 사라지게 하고 싶은데

// $dropdownToggle.addEventListener('click', clickHandler);
//
// function clickHandler() {
//   $dropdownMenu.classList.remove('show');
// }

// 안 되네


// 옵션 중 하나 누르면 눌린 것의 이름이 나오게 하기
// 둘 다 버튼이니까, 원래 있던 버튼을 클릭된 버튼으로 바꿔치기 하는 방법 없나? -> 되는데, 드롭다운에서 사라져버린다.

// innerText 사용하니까 버튼스럽지 않게 글자만 간다.
// 그리고, 두 방법 모두 제일 첫 번째 녀석만 된다. -> querySelector는 첫 번째만 가져온다고 했다!!!!
// 버튼의 value 속성 이용해서 접근하는 법은 뭘까?

// $dropdownOption.addEventListener('click', optionHandler);
//
// function optionHandler() {
//   $dropdownToggle.replaceWith($dropdownOption.innerText); // 되는데, 사라진다.
// }

// const $dropdownOption[i] = $dropdownOption; // 어떻게 해야 되지.?

// $dropdownOption[i].addEventListener('click', optionHandler); // i 정의 안 하고 막 써도 되나?
//
// function optionHandler() {
//
// }

console.log($dropdownOption[0]);

// 눌리면 그 눌린 것의 value를 이용해서 그놈을 올라오게 해
// 스마트한 방법 모르겠으니 일일이 만들어

// 버튼 활성화되게 하기.

// 인덱스 0번.
$dropdownOption[0].addEventListener('click', optionHandler0);

function optionHandler0() {
  $dropdownToggle.replaceWith($dropdownOption[0]);
  // $dropdownToggle.classList.add(dropdown-toggle);
  $dropdownMenu.classList.remove('show');
  $nextButton.removeAttribute('disabled');
}

// 1.

$dropdownOption[1].addEventListener('click', optionHandler1);

function optionHandler1() {
  $dropdownToggle.replaceWith($dropdownOption[1]);
  $dropdownMenu.classList.remove('show');
  $nextButton.removeAttribute('disabled');
}

// 2.

$dropdownOption[2].addEventListener('click', optionHandler2);

function optionHandler2() {
  $dropdownToggle.replaceWith($dropdownOption[2].innerText);
  $dropdownMenu.classList.remove('show');
  $nextButton.removeAttribute('disabled');
}

// 3.

$dropdownOption[3].addEventListener('click', optionHandler3);

function optionHandler3() {
  $dropdownToggle.replaceWith($dropdownOption[3].innerText);
  $dropdownMenu.classList.remove('show');
  $nextButton.removeAttribute('disabled');
}

// 4.

$dropdownOption[4].addEventListener('click', optionHandler4);

function optionHandler4() {
  $dropdownToggle.replaceWith($dropdownOption[4].innerText);
  $dropdownMenu.classList.remove('show');
  $nextButton.removeAttribute('disabled');
}

// 5.

$dropdownOption[5].addEventListener('click', optionHandler5);

function optionHandler5() {
  $dropdownToggle.replaceWith($dropdownOption[5].innerText);
  $dropdownMenu.classList.remove('show');
  $nextButton.removeAttribute('disabled');
}
