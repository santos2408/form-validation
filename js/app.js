// VALIDANDO CARACTERES INSERIDOS NO INPUT
const inputUsername = document.querySelector('#username')
const p = document.createElement('p')

inputUsername.addEventListener('keyup', event => {
   const username = event.target.value 
   const usernameRegex = /^[a-zA-Z]{6,}$/
   const isAValidUsername = usernameRegex.test(username)

   if (!isAValidUsername) {
      p.setAttribute('class', 'username-help-feedback')
      p.innerHTML = 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas.'
      inputUsername.style.borderColor = '#E8B635'
      inputUsername.insertAdjacentElement('afterend', p)
      return
   }

   p.setAttribute('class', 'username-success-feedback')
   p.textContent = 'Esse nome de usuário é válido!'
   inputUsername.style.borderColor = '#6EC080'
   inputUsername.insertAdjacentElement('afterend', p)
})