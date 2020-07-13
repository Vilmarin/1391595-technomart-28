/* POPUP */
{
  const open_popup = document.querySelectorAll('.open_popup')
  const popup = document.querySelector('.popup')
  const close_popup = document.querySelector('.close_popup')
  const send = document.querySelector('.popup_btn')
  const user_name = popup.querySelector('[name=name_field]')
  const email = popup.querySelector('[name=email_field]')


  const POPUP_SHOW = 'popup_show'

  if (popup) {
    open_popup.forEach(Element => {
      Element.addEventListener('click', () => {
        popup.classList.add(POPUP_SHOW)
      })
    })

    close_popup.addEventListener('click', () => {
      popup.classList.remove(POPUP_SHOW);
      popup.classList.remove('popup_error')
    })
  } else {
    console.log("POPUP пустой");
  }

  send.addEventListener('click', (evt) => {
    if (!user_name.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove('popup_error');
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('popup_error');
    }
  })

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
