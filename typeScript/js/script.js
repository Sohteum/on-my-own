"use strict";
// 기본타입
let str = "가나다";
//타입추론을 알아서 함' 하지만 정확히 적어주면 위와 같음. 왠만하면 안적어도 상관없음. 타입추론이 되니까.안그래도 적을거 많으니까용
let n = 1;
//str = 1
//에러를 알려줌. 하지만 애니타입은 아래와 같이 에러가 안남.
let bool = false;
let any = "1";
any = 'a';
//타입을 안쓰겠다는 뜻...애니를 config.json에서 못쓰게 바꿀 수도 있음
// 유니언타입 ->any보다는 착하지만 지양하자
let union = false;
union = 1;
let arrNum = [1, 2, 3];
let arrStr = ['a', 'b', 'c'];
let arrUni = ['a', 'b', 'c', 1]; //여기서는 소괄호 써야함
//튜플타입. 형태를 정해주는 것. //짝짝이 맞아야함 배열의 길이를 바꿀 수 없음 
let tuple = [1, '1'];
//오브젝트형 젠더는 조건부타입. 객체에서 쓰는것.
let person = {
    name: '홍길동',
    age: 24,
};
//함수선언 function 파라미터는 안에서 선언을 해주고 밖에는 리턴하는 타입
function fnSum(a, b) {
    return a + b;
}
fnSum(1, 2);
function fnSum2(a, b) {
    return a + String(b);
    //이렇게 사용하면 1, '2'는 숫자니까 리턴값에 숫자를 넣어줘야지
}
fnSum(1, 2);
//보이드는 리턴을 하지 않겠다는 뜻(일반함수선언)
function fnAlert(a, b) {
    alert(a + b);
}
fnAlert(1, 2);
//화살표함수는 이렇게 작성하면 됨.
let fnSub = (a, b) => {
    alert(a + b);
};
fnSub(1, 2);
function overload(a, b) {
    return a + b;
}
// 함수 구현
function add(a, b, c) {
    return a + (b !== null && b !== void 0 ? b : 0) + (c !== null && c !== void 0 ? c : 0);
}
// 함수 호출
console.log(add(1, 2, 3));
// 6
//타입가드
//html 의 h1을 안만들어놓을수도 있으니까 에러가 뜸. 
//document.querySelector('h1').innerText = 'test'
//as확정. as assertion
let h1 = document.querySelector('h1');
//이렇게 하면 확정 할 수 있음 h1이 있다는 것임 
if (document.querySelector('h1')) {
    let h1 = document.querySelector('h1');
    h1.innerText = 'test';
}
let num = 1.123;
num = num.toFixed(2); //여기서 소수점으로 바꾸면 string으로 변해서 오류가 남. 그래서 위에서 유니언 타입을 설정해줌
console.log(num);
//Non-null 단언
//여기서 값이 없으면 또 어케할래? 하고 오류가 남. 그럼 느낌표를 써서 값이 있다고 말을 해주는것
let num1;
let str1;
//이렇게 하면 에러는 안나는데 정확하게 할려면 조검문
str1 = num1.toFixed(2);
//조건문은 실제 브라우저에서 에러가 안나게 하기 위해 쓰는거고 느낌표는 타입에러를 잡기 위함.
if (num1) {
    str1 = num1.toFixed(2);
}
//(확정)할당단언
//이렇게 막아도 됨. 근데 이건 타입 에러만 막는거고 
//실제로 사용할때는 if문안에 넣어줘야함
let n1;
console.log(n1.toFixed(2));
let member = {
    name: '홍길동',
    age: 24,
};
let member2 = {
    name: '아무개',
    age: 14,
    email: 'dkfjd'
};
const memberArr = [
    { name: '홍길동', age: 24 },
    { name: '아무개', age: 32 },
];
//제너릭
//제너릭은 사칙연산이 안됨.ㅈ
let fnSum1 = (a, b) => {
    return a + b;
};
//이걸 줄여서 사용하는 것
//여기 다 넘버를 넣는데 여러번 들어가니까 그냥 줄어서 사용하는거
let fnSum3 = (a, b) => {
    return [a, b];
};
fnSum3(1, 2);
let fnSum4 = (a, b) => {
    return 'a+b';
};
fnSum4(1, 2);
fnSum4('1', '2');
//이런식으로 사용하기 좋음
