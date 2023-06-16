

const sliderContainer = document.querySelector('#before-and-after-slider')

function updateImageSlide(e){
  if(sliderContainer.classList.contains('clicked')){
    console.log(e.offsetX)
    gsap.set("#before-image", {
      width: `${e.offsetX}px`
    });
  }
}

sliderContainer.addEventListener('mousedown',(e) => {
  sliderContainer.classList.add('clicked')
  updateImageSlide(e)
})
sliderContainer.addEventListener('mouseup',() => {
  sliderContainer.classList.remove('clicked')
})
sliderContainer.addEventListener('mouseout',() => {
  sliderContainer.classList.remove('clicked')
})

sliderContainer.addEventListener('mousemove',(e) => {
  updateImageSlide(e)
})

const altImageGrid = document.querySelector('#alt-image-grid')
const altImages = altImageGrid.querySelectorAll('img')

altImages.forEach(img => {
  img.addEventListener('click', () => {
    console.log(`url(${img.src})`)
    gsap.set('#before-image',{
      backgroundImage: `url('${img.src}')`
    })
    gsap.set('#after-image',{
      backgroundImage: `url('${img.dataset.preImage}')`
    })
  })
});