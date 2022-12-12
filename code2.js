const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const button = document.querySelector('.btn');

button.addEventListener('click', function () {
  alert(`ширина Вашего экрана равна ${screenWidth}px,
  а его длина - ${screenHeight}px`);
});
