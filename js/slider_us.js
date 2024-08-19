const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('slider__items').scrollLeft += 50;
};
buttonLeft.onclick = function () {
  document.getElementById('slider__items').scrollLeft -= 50;
};






