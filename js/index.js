const singupBtn = document.querySelector('.singup__btn')
const sendButton = document.querySelector('#singup__send_btn')
const singUpModal = document.querySelector('.modal__form')


singupBtn.onclick = (e) => {
    e.preventDefault();
    document.querySelector('.singup__modal_body').classList.remove('hidden')
    document.querySelector('.form__send').classList.add('hidden')
}  

sendButton.onclick = (e) => {
    e.preventDefault();
    document.querySelector('.singup__modal_body').classList.add('hidden')
    document.querySelector('.form__send').classList.remove('hidden')
}  


let code = document.querySelector('#code'); // Получаем скрытый input
  document.querySelector('.btn').onclick = function(){ // Клик по кнопке отправки
    code.value = 'NOSPAM'; // Подставляем значение в value инпута
  };

  let code_modal = document.querySelector('#code_modal'); // Получаем скрытый input
  document.querySelector('.btn').onclick = function(){ // Клик по кнопке отправки
    code.value = 'NOSPAM'; // Подставляем значение в value инпута
  };