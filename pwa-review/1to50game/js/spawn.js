//알까기....? 여기서 버튼을 만들어서 뿌릴거고, 랜덤하게 나와야함. 배열사용. 처음은 0-25, 두번째는 그나머지

btnArr = []//버튼의 위치 선언 윈도우전역변수로!


fnSetArr = (start, end) => {//배열이 있어야 중복 안되게 뽑을 수 잇음. 무조건
  btnArr = [] //푸시를 하면 25개가 들어있는데 잖아...여기서는 비워놓고 다시 채운다
  for (let i = start; i <= end; i++) {
    let button = document.createElement('button')
    button.value = i //몇번째인지 알 수 있도록
    button.innerHTML = `<span>${i}</span>`
    btnArr.push(button)
  }
}//fnSetArr

fnSpawnBtn = () => {//배열이 만들어지면 하나씩 출력을 해야돼
  for (let i = 1; i <= 25; i++) {
    let ranN = Math.floor(Math.random() * btnArr.length)//창고에들어있는 버튼의 개수만큼만 뽑아야하니까(계속 지우니까 길이가 계속 달라져서 )
    // let button = btnArr[ranN]//뽑은거 나와
    document.querySelector('.board').append(btnArr[ranN])
    btnArr.splice(ranN, 1) //뽑은거 지움(겹치면안되니까)
  }
}//fnSpawnBtn
//처음에는 25개중에 하나를뽑고 그걸 뺌.그리고 24개에서 하나뽑고 다시 없애고.배열의 길이에서 하나를 뽑아서 죽임. 그리고 그걸 25번 반복ㅌ
//엘리먼트는 참조가 됨.

fnBtnHandler = () => {
  document.querySelectorAll('.board button').forEach(v => {//배열은 이벤트 못주니까 여기선 포이치, v는 버튼
    v.addEventListener('click', (e) => {
      if (parseInt(e.currentTarget.value) === nextNum) {
        alert('정답')
        e.currentTarget.disabled = true
      } else {
        time -= 10 * 10
        document.querySelector('section').classList.add('active')
      }//if

    })

  })
}//fnBtnHandler