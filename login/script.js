const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.querySelector('button')
const form = document.querySelector('.formCamp')

button.addEventListener('click', (e)=>{
    e.preventDefault()
    check()
    email.value = ''
    password.value = ''
})

function check(){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

    const checkE = checkEmail(regexEmail, email.value)
    const checkP = checkPassword(regexPassword, password.value)

    if(checkP == true && checkE == true){
        //form.submit()
        alert('válido')
    }
    else {
        alert('errado')
    }
}

function checkEmail(regexEmailTest, emailTest){
    if(regexEmailTest.test(emailTest)){
        return true
    }
}

function checkPassword(regexPasswordTest, passwordTest){
    if(regexPasswordTest.test(passwordTest)){
        return true
    }
}




