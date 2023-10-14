// 기본타입

let str: string = "가나다"
//타입추론을 알아서 함' 하지만 정확히 적어주면 위와 같음. 웬만하면 안적어도 상관없음. 타입추론이 되니까.안그래도 적을거 많으니까용
let n: number = 1
//str = 1
//에러를 알려줌. 하지만 애니타입은 아래와 같이 에러가 안남.
let bool: boolean = false
let any: any = "1"
any = 'a'
//타입을 안쓰겠다는 뜻...애니를 config.json에서 못쓰게 바꿀 수도 있음

// 유니언타입 ->any보다는 착하지만 지양하자
let union: string | number | boolean = false
union = 1

let arrNum: number[] = [1, 2, 3]
let arrStr: string[] = ['a', 'b', 'c']
let arrUni: (string | number)[] = ['a', 'b', 'c', 1] //배열에서는 소괄호 써야함


//튜플타입. 형태를 정해주는 것. //짝짝이 맞아야함 배열의 길이를 바꿀 수 없음 
let tuple: [number, string] = [1, '1']

//오브젝트형 젠더는 조건부타입. 객체에서 쓰는것.
let person: {
  name: string,
  age: number,
  gender?: string,
} = {
  name: '홍길동',
  age: 24,
}

//함수선언 function 파라미터는 안에서 선언을 해주고 밖에는 리턴하는 타입
function fnSum(a: number, b: number): number {
  return a + b;
}
fnSum(1, 2)

function fnSum2(a: number, b: number): string {
  return a + String(b);
  //이렇게 사용하면 1, '2'는 숫자니까 리턴값에 숫자를 넣어줘야지
}
fnSum(1, 2)


//보이드는 리턴을 하지 않겠다는 뜻(일반함수선언)
function fnAlert(a: number, b: number): void {
  alert(a + b)
}
fnAlert(1, 2)

//화살표함수는 이렇게 작성하면 됨.
let fnSub = (a: number, b: number): void => {
  alert(a + b)
}
fnSub(1, 2)

//오버로딩. 화살표함수에는 적용이 안됨. or랑비슷함. 사용자가 뭘 넣을지 모르는 상황
//overloading
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;

function overload(a: any, b: number | string): any {
  return a + b
}
//위에서 선언한게 다르니까 밑에서 선언할 때 any로 하던지 아니면 유니언타입으로 하면 됨

// 함수 선언
function add(a: number): number;
function add(a: number, b: number): number;
function add(a: number, b?: number, c?: number): number;

// 함수 구현
function add(a: number, b?: number, c?: number): number {
  return a + (b ?? 0) + (c ?? 0);
}

// 함수 호출
console.log(add(1, 2, 3));
// 6



//타입가드
//html 의 h1을 안만들어놓을수도 있으니까 에러가 뜸. 
//document.querySelector('h1').innerText = 'test'
//as확정. as assertion
let h1 = document.querySelector('h1') as HTMLElement
//이렇게 하면 확정 할 수 있음 h1이 있다는 것임 

if (document.querySelector('h1')) {
  let h1 = document.querySelector('h1') as HTMLElement
  h1.innerText = 'test'
}

let num: number | string = 1.123
num = num.toFixed(2) //여기서 소수점으로 바꾸면 string으로 변해서 오류가 남. 그래서 위에서 유니언 타입을 설정해줌
console.log(num)



//Non-null 단언
//여기서 값이 없으면 또 어케할래? 하고 오류가 남. 그럼 느낌표를 써서 값이 있다고 말을 해주는것
let num1: number
let str1: string
//이렇게 하면 에러는 안나는데 정확하게 할려면 조검문
str1 = num1!.toFixed(2)
//조건문은 실제 브라우저에서 에러가 안나게 하기 위해 쓰는거고 느낌표는 타입에러를 잡기 위함.
if (num1!) {
  str1 = num1!.toFixed(2)
}


//(확정)할당단언
//이렇게 막아도 됨. 근데 이건 타입 에러만 막는거고 
//실제로 사용할때는 if문안에 넣어줘야함
let n1!: number
console.log(n1.toFixed(2))

//엘리어스타입
//타입별칭: 여러번 사용되어야하는 타입을 임의로 만들어서 사용함
//매번 객체에서 타입선언을 하면 귀찮으니까 

type Person = {
  name: string;
  age: number;
}
type PersonOption = {
  email: string;
  tel?: number;
}
let member: Person = {
  name: '홍길동',
  age: 24,
}
let member2: Person & PersonOption = {
  name: '아무개',
  age: 14,
  email: 'dkfjd'
}


const memberArr: Person[] = [
  { name: '홍길동', age: 24 },
  { name: '아무개', age: 32 },
]



//제너릭
//제너릭은 사칙연산이 안됨.ㅈ
let fnSum1 = (a:number, b:number):number =>{
return a+b
}
//이걸 줄여서 사용하는 것
//여기 다 넘버를 넣는데 여러번 들어가니까 그냥 줄어서 사용하는거
let fnSum3 = <T>(a:T, b:T):T[] =>{
  return [a, b]
}

fnSum3<number>(1, 2)





let fnSum4 = <T>(a:T, b:T):string =>{
  return 'a+b'
}

fnSum4<number>(1, 2)
fnSum4<string>('1', '2')
//이런식으로 사용하기 좋음