const buttonRight_1 = document.getElementById('slideRight_1');
const buttonLeft_1 = document.getElementById('slideLeft_1');

buttonRight_1.onclick = function () {
  document.getElementById('slider__brands').scrollLeft += 50;
};
buttonLeft_1.onclick = function () {
  document.getElementById('slider__brands').scrollLeft -= 50;
};


const buttonRight_2 = document.getElementById('slideRight_2');
const buttonLeft_2 = document.getElementById('slideLeft_2');

buttonRight_2.onclick = function () {
  document.getElementById('news').scrollLeft += 50;
};
buttonLeft_2.onclick = function () {
  document.getElementById('news').scrollLeft -= 50;
};
