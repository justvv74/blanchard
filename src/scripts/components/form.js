const form = document.querySelector('.section-feedback__form'),
  formInputs = document.querySelectorAll('.section-feedback__input'),
  inputName = document.querySelector('#input-name'),
  inputPhone = document.querySelector('#input-phone'),
  nameTitle = document.querySelector('#label-name'),
  phoneTitle = document.querySelector('#label-phone'),
  btnTitle = document.querySelector('#form-submit'),
  formMessage = document.querySelector('.form-message');
let error = false;

// Валидация
function validateName(name) {
  const nameRule = /^[А-Яа-я\ ]{2,40}$/;
  return nameRule.test(String(name))
}

function validatePhone(phone) {
  const phoneRule = /^[0-9\s\-\(\)\+]{10,18}/;
  return phoneRule.test(String(phone))
}

// Функция проверки полей формы
form.onsubmit = () => {
  const nameVal = inputName.value,
    phoneVal = inputPhone.value,
    emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('error')
      btnTitle.textContent = 'Заполните обязательные поля'
      error = true
    } else {
      input.classList.remove('error')
      btnTitle.textContent = 'Заказать обратный звонок'
    }
  })

  if (emptyInputs.length !== 0) {
    return false
  }

  if (!validateName(nameVal)) {
    inputName.classList.add('error')
    nameTitle.textContent = 'Введите имя от 2 до 40 букв'
    error = true
    return false
  } else {
    inputName.classList.remove('error')
    nameTitle.textContent = ''
    error = false
  }

  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add('error')
    phoneTitle.textContent = 'Введите 11 цифр номера'
    error = true
    return false
  } else {
    inputPhone.classList.remove('error')
    phoneTitle.textContent = ''
    error = false
  }
}

// Убираем дефолтную отправку формы
form.addEventListener('submit', handleForm);
function handleForm(event) {
  event.preventDefault();
}

// Отправка на сервер
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (error != true) {
    sendForm();
  }
});

// Отправка на сервер
function sendForm() {
  const encodeName = encodeURIComponent(inputName.value),
    encodePhone = encodeURIComponent(inputPhone.value),
    formData = 'Имя=' + encodeName + '&Phone=' + encodePhone,
    xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
  xhr.responseType = 'text';
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(formData);
  xhr.onload = () => {
    if (xhr.status !== 200) {
      formMessage.classList.add('form-message-visible');
      setTimeout(MessagePopap, 5000)
      return;
    }
  }

  // Убираем сообщение об отправке
  function MessagePopap() {
    formMessage.classList.remove('form-message-visible')
  }
}
