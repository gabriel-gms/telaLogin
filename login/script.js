const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.querySelector('button')
const form = document.querySelector('.formCamp')
const viewPassword = document.querySelector('i')
const verify = document.querySelectorAll('.verify')
const areaAlert = document.querySelector('#areaAlert')

viewPassword.addEventListener('click', viewPw)

function viewPw() {
  if (password.getAttribute('type') === 'password') {
    password.setAttribute('type', 'text')
    viewPassword.setAttribute('class', 'bi bi-eye-slash')
  }
  else if (password.getAttribute('type') === 'text') {
    password.setAttribute('type', 'password')
    viewPassword.setAttribute('class', 'bi bi-eye')
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault()
  check()
  email.value = ''
  password.value = ''
})

function check() {
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

  const checkE = checkEmail(regexEmail, email.value)
  const checkP = checkPassword(regexPassword, password.value)

  if (checkP == true && checkE == true) {
    form.submit()
  } else {
    verify.forEach((v, i) => {
      if (v.value === '') {
        const footer = document.querySelectorAll('footer')
        footer[i].innerHTML = 'campo vazio'
        v.style.borderColor = 'red'
      }
      else if (v.value) {

        switch (i) {
          case 0:
            if (checkEmail(regexEmail, v.value) == true) {
              const footer = document.querySelectorAll('footer')
              footer[0].innerHTML = ''
              v.style.borderColor = ''
            }
            else {
              const footer = document.querySelectorAll('footer')
              footer[0].innerHTML = 'email incorreto'
              v.style.borderColor = 'red'
              areaAlert.style.display = 'block'
            }
            break
          case 1:
            if (checkPassword(regexPassword, v.value) == true) {
              const footer = document.querySelectorAll('footer')
              footer[1].innerHTML = ''
              v.style.borderColor = ''
            }
            else {
              const footer = document.querySelectorAll('footer')
              footer[1].innerHTML = 'senha incorreta'
              v.style.borderColor = 'red'
              areaAlert.style.display = 'block'
            }
            break
        }

      }
    })

  }
}

function checkEmail(regexEmailTest, emailTest) {
  if (regexEmailTest.test(emailTest)) {
    return true
  }
}

function checkPassword(regexPasswordTest, passwordTest) {
  if (regexPasswordTest.test(passwordTest)) {
    return true
  }
}