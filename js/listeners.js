export default () => {
  const write_us_wrapper = document.querySelector('.write_us_wrapper')
  // const buy_btn = document.querySelector('.buy_btn')

  // buy_btn.addEventListener('click', () => {
  //   write_us_wrapper.classList.add('write_us_wrapper-show')
  // })

  const buy_btn = document.querySelectorAll('.buy_btn')

  buy_btn.forEach(htmlElement => {
    htmlElement.addEventListener('click', () => {
      write_us_wrapper.classList.add('write_us_wrapper-show')
    })
  })

  const close_button = document.querySelector('.close_button')

  close_button.addEventListener('click', () => {
    write_us_wrapper.classList.remove('write_us_wrapper-show')
  })

  const continue_shopping = document.querySelector('.continue_shopping')

  continue_shopping.addEventListener('click', () => {
    write_us_wrapper.classList.remove('write_us_wrapper-show')
  })
}
