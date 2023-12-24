// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text, index=0) {

  const doorInput = document.querySelector(`.day-${index + 1} > label > input`)
  
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    if(index !==0)
      doorInput.checked = false;
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "벌써 12월이야!" },
  { "number": 2, "message": "올해도 너무 바쁘고 힘들었지만" },
  { "number": 3, "message": "(사실 나는 바쁜지 몇 달 안되었지만^.^)" },
  { "number": 4, "message": "남은게 더 많은 한 해가 되었길 바랄게~!" },
  { "number": 5, "message": "님들과 함께한 올해도" },
  { "number": 6, "message": "너무 즐거웠고" },
  { "number": 7, "message": "행복했다~" },
  { "number": 8, "message": "내년에는 우리" },
  { "number": 9, "message": "더 돈독하게 재밌게 보내자 ~" },
  { "number": 10, "message": "백수랑 놀아줘서 고맙고-3-" },
  { "number": 11, "message": "챙겨줘서 고마웠어!" },
  { "number": 12, "message": "내년에는 돈 많이 벌어올께 ^.^" },
  { "number": 13, "message": "더 많이 놀아줘!" },
  { "number": 14, "message": "그대들도 내년에는 조금 덜 일하고 돈은 더 많이 받길!!" },
  { "number": 15, "message": "이제 나이도 있으니ㅋㅋ" },
  { "number": 16, "message": "건강도 잘 챙기고" },
  { "number": 17, "message": "내년에는 술도 조금만!" },
  { "number": 18, "message": "대신 맛있게 먹자" },
  { "number": 19, "message": "남은 연말 행복하게 보내고~~" },
  { "number": 20, "message": "편지를 안쓰다보니" },
  { "number": 21, "message": "24문장 쓰기도 어렵네" },
  { "number": 22, "message": "그럼 몇일 안남았으니까 딱 말할게ㅋㅋ" },
  { "number": 23, "message": "사랑해 ~" },
  { "number": 24, "message": "Merry Christmas! 크리스마스 이브 행복하게 보내~" }
];

// // 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
// const doors = document.querySelectorAll('.door');
// doors.forEach((door, index) => {
//   door.addEventListener('click', () => {
//     // 상위 div의 class 번호를 찾아서 image url에 사용합니다
//     const imageUrl = `image/card/card-${index + 1}.png`;

//     // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
//     const doorDiv = document.querySelector(`.day-${index + 1}`)
//     const backDiv = doorDiv.querySelector(`.back`);

//     const style = window.getComputedStyle(backDiv);
//     const pTag = backDiv.querySelector('p')
//     const text = modalMessageList[index]['message']

//     // showModal 함수를 호출하여 모달을 표시합니다.
//     showModal(imageUrl, text);
//     // alert('이벤트 캘린더를 엽니다.');
//   });
// });

