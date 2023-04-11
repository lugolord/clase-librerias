const user = { mail: 'goku@gmail.com', password: '123456' }
const loginForm = document.querySelector('#loginForm')

const showOkAlert = () => {
  Swal.fire(
    'Bienvenido!',
    'Credenciales validas',
    'success'
  )
}

const showErrorAlert = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}

const checkCredentials = (mail, pass) => {
  if (mail === user.mail && pass === user.password) {
    return true
  }

  return false
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const userMail = e.target[0].value
  const userPassword = e.target[1].value

  const ok = checkCredentials(userMail, userPassword)

  ok ? showOkAlert() : showErrorAlert()
})
