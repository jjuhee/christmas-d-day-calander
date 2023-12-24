// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text, index = 0) {
  const doorInput = document.querySelector(`.day-${index + 1} > label > input`);

  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector(".modal");
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement("div");
  modal.className = "modal hidden";

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content zoomIn";

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement("div");
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = "Door Image";
  image.style.width = "100%";
  image.style.height = "211px";

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement("p");
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener("click", () => {
    if (index !== 0) doorInput.checked = false;
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove("hidden"), 0);
}

const modalMessageList = [
  { number: 1, message: "사랑하는 무뇽무뇽!" },
  { number: 2, message: "오늘도 밖에 나가 일하느라 고생하시는 서방뉨" },
  { number: 3, message: "이거 귀찮아도 다 눌러라^.^?" },
  { number: 4, message: "너랑 같이 있는 시간은 너무 재밌어" },
  { number: 5, message: "항상 웃겨줘서 고맙고" },
  { number: 6, message: "오래오래 변치 않았으면 좋겠구" },
  { number: 7, message: "마음이 변할까바 항상 무섭지만" },
  { number: 8, message: "그만큼 내가 노력할게. 서로 노력하자!" },
  { number: 9, message: "지금은 백수 핑계로 많이 못 챙겨주고" },
  { number: 10, message: "내가 많이 기대고 있지만" },
  { number: 11, message: "조금만 기다려봐~" },
  { number: 12, message: "내년에는 돈 많이 벌어올께 ^.^" },
  { number: 13, message: "내년에는 더 재밌게 놀자" },
  { number: 14, message: "물론 내가 조금 더 바빠지고" },
  { number: 15, message: "거리가 멀어질 수도 있고" },
  { number: 16, message: "그래서 자주 못 볼 수도 있지만" },
  { number: 17, message: "만나면 더더더더 재밌게 놀구" },
  { number: 18, message: "더더더더 사랑해주자" },
  { number: 19, message: "근데" },
  { number: 20, message: "언제 들어와?" },
  { number: 21, message: "빨리와" },
  { number: 22, message: "보고싶어" },
  { number: 23, message: "사랑해 ~" },
  { number: 24, message: "Merry Christmas!" },
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
