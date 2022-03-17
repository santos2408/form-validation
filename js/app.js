// VALIDANDO CARACTERES INSERIDOS NO INPUT
const inputUsername = document.querySelector('#username')
const paragraphFeedback = document.createElement('p')


inputUsername.addEventListener('keyup', event => {
   const inputValue = event.target.value 
   const usernameRegex = /^[a-zA-Z]{6,}$/
   const isAValidUsername = usernameRegex.test(inputValue)   

   if (!isAValidUsername) {
      paragraphFeedback.setAttribute('class', 'username-help-feedback')
      paragraphFeedback.innerHTML = 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas.'
      inputUsername.style.borderColor = '#E8B635'
      inputUsername.insertAdjacentElement('afterend', paragraphFeedback)
      return
   }

   paragraphFeedback.setAttribute('class', 'username-success-feedback')
   paragraphFeedback.textContent = 'Esse nome de usuário é válido!'
   inputUsername.style.borderColor = '#6EC080'
   inputUsername.insertAdjacentElement('afterend', paragraphFeedback)
})