/* POPUP */
{
  const openPopup = document.querySelectorAll('.open_popup')
  const popup = document.querySelector('.popup')
  const closePopup = document.querySelector('.close_popup')

  const POPUP_SHOW = "popup_show"

  if (popup) {
    openPopup.forEach(Element => {
      Element.addEventListener('click', () => {
        popup.classList.add(POPUP_SHOW)
      })
    })

    closePopup.addEventListener('click', () => {
      popup.classList.remove(POPUP_SHOW);
    })
  } else {
    console.log("POPUP пустой");
  }
}

/* SLIDER */
{
  const btns = document.querySelectorAll('.slider_btn')
  const sliders = document.querySelectorAll('.slider')
  if (sliders.length) {
    //init
    sliders.forEach((el, index) => {
      if (index !== 0) {
        el.classList.remove('slider_show')
      }
    })
    //code
    btns.forEach(el => {
      el.addEventListener('click', (event) => {
        const btnEl = event.currentTarget
        const btnName = btnEl.dataset.name
        sliders.forEach(el => {
          el.classList.remove('slider_show')
          const sliderName = el.dataset.name
          if (sliderName === btnName) {
            btns.forEach(el => {
              el.classList.remove('slider_btn--active')
            })
            el.classList.add('slider_show')
            btnEl.classList.add('slider_btn--active')
          }
        })
      })
    })
  }
}

/* MAP */
{
  const mapPopup = document.querySelector('.map_popup')
  const openMap = document.querySelector('.open_map')
  const closeMap = document.querySelector('.map_popup_close')


  openMap.addEventListener('click', (evt) => {
    event.preventDefault();
  }, false)

  openMap.addEventListener('click', () => {
    console.log(openMap);
    mapPopup.classList.add('map_popup_show')
  })

  closeMap.addEventListener('click', () => {
    mapPopup.classList.remove('map_popup_show')
  })
}
