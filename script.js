const btnNext = document.querySelector('.next')
const btnPrev = document.querySelector('.prev')
let sliders = [...document.querySelectorAll('.slide')]
let activeSlider = 0

prev = () => {
  sliders.map(item => item.classList.add('prev'))
}

next = () => {
  sliders.map(item => item.classList.remove('prev'))
}

const resetSlider = () => {
  sliders.map(item => item.classList.remove('active'))
}

const nextSlider = () => {
  if (activeSlider < sliders.length) {
    activeSlider++
  }
  if (activeSlider === sliders.length) {
    activeSlider = 0
  }
  resetSlider();
  initSliders();
}

const prevSlider = () => {
  if (activeSlider === 0) {
    activeSlider = sliders.length
  }
  activeSlider-- 
  resetSlider();
  initSliders();
}

const initSliders = () => {
  sliders[activeSlider].classList.add('active') 
}

btnNext.addEventListener('click', () => {
  next();
  setTimeout(() => {
    nextSlider();
  }, 100)
})
btnPrev.addEventListener('click', () => {
  prev();
  setTimeout(() => {
    prevSlider();
  }, 100)
})

initSliders();