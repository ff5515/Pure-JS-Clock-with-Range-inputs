let page = document.querySelector('.container');
let watch = document.querySelector('.outer-circle');
let innerCircle = document.querySelector('.inner-circle')
let clock = document.querySelector('.clock');

let posX = document.querySelector('.dragX'); 
let posY = document.querySelector('.dragY'); 

let handlerLR = document.querySelector('.handler-lr'); // LR = left right
let handlerUD = document.querySelector('.handler-ud'); // UD = up down

let colorChanger = document.querySelector('.color-changer');
let scaleChanger = document.querySelector('.scale');

//clock
let currentTime = () => {
  let time = (new Date()).toLocaleTimeString().split('/:');
  clock.innerHTML = time;
  setTimeout('currentTime()' ,100)
}
currentTime()

//up and down 
handlerLR.addEventListener('input', (e) => {
  let val = e.target.value;
  posX.style.transform = `translateX(${val}px)`;
} )

//left and right 
handlerUD.addEventListener('input', (e) => {
  let val = e.target.value;
  posY.style.transform = `translateY(-${val}px)`
} )

//color picker
colorChanger.addEventListener('input', (e) => {
  let newColor = "#" + e.target.value;
  innerCircle.style.backgroundColor = newColor;
})

//scale adjustment
scaleChanger.addEventListener('input', (e) => {
  let newScale = e.target.value;
  watch.style.transform = `scale(${newScale})`
})

//animations on hover
watch.addEventListener('mouseenter', () => {
  watch.style.transform = 'scale(0.9)';
  watch.style.transition = 'all ease 500ms'
} )

watch.addEventListener('mouseleave', () => {
  watch.style.transform = 'scale(1)';
  watch.style.transition = 'all ease 500ms'
})