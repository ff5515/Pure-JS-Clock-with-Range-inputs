let page = document.querySelector('.container');
let today = document.querySelector('.today-div');

let watch = document.querySelector('.outer-circle');
let innerCircle = document.querySelector('.inner-circle')
let clock = document.querySelector('.clock');

let posX = document.querySelector('.dragX'); 
let posY = document.querySelector('.dragY'); 

let handlerLR = document.querySelector('.handler-lr'); // LR = left right
let handlerUD = document.querySelector('.handler-ud'); // UD = up down

let colorChanger = document.querySelector('.color-changer');
let scaleChanger = document.querySelector('.scale');

let date = new Date().toLocaleDateString().split(' ').toString();
//date into separate characters
for (i=0; i < date.length; i++) {
  today.innerHTML += `<span class='today'>` + date[i] + `</span>`
}

//date appearing animation
function showDate () {
  let char = 0;
  function showDateClick() {
    let todayChar = today.querySelectorAll('.today')[char];
      todayChar.classList.toggle('today-appear');
      char++;
      if (char === date.length) {
        complete();
        return;
      }
    }
    let timer = setInterval(showDateClick, 50); 
    function complete() {
      clearInterval(timer);
      timer = null;
    }
  }

//clock
let currentTime = () => {
  let time = (new Date()).toLocaleTimeString().split('/:');
  clock.innerHTML = time;
  setTimeout('currentTime()' ,100)
}
currentTime()

//up and down handler
handlerLR.addEventListener('input', (e) => {
  let val = e.target.value;
  posX.style.transform = `translateX(${val}px)`;
} )

//left and right handler
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