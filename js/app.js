// VALIDANDO CARACTERES INSERIDOS NO INPUT
const inputUsername = document.querySelector('#username')
const form = document.querySelector('form')
const button = document.querySelector('button')

const paragraphInputFeedback = document.createElement('p')
const paragraphSubmitFeedback = document.createElement('p')

inputUsername.addEventListener('input', event => {
   const inputValue = event.target.value 
   const usernameRegex = /^[a-zA-Z]{6,}$/
   const isAValidUsername = usernameRegex.test(inputValue)
   
   paragraphSubmitFeedback.setAttribute('data-submit-feedback', 'submit-feedback')

   const paragraphSubmitFeedbackExists = document
      .querySelector('[data-submit-feedback="submit-feedback"]')

   if (paragraphSubmitFeedbackExists) {
      paragraphSubmitFeedback.remove()
   }

   if (!isAValidUsername) {
      paragraphInputFeedback.setAttribute('class', 'username-help-feedback')
      paragraphInputFeedback.textContent = 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas.'
      inputUsername.style.borderColor = '#E8B635'
      inputUsername.insertAdjacentElement('afterend', paragraphInputFeedback)
      return
   }

   paragraphInputFeedback.setAttribute('class', 'username-success-feedback')
   paragraphInputFeedback.textContent = 'Esse nome de usuário é válido!'
   inputUsername.style.borderColor = '#6EC080'
   inputUsername.insertAdjacentElement('afterend', paragraphInputFeedback)
})

// VALIDANDO ENVIO DO FORMULÁRIO
form.addEventListener('submit', event => {
   event.preventDefault()

   const inputValue = event.target.username.value
   const usernameRegex = /^[a-zA-Z]{6,}$/
   const isAValidUsername = usernameRegex.test(inputValue)

   const paragraphInputFeedbackExists = document
      .querySelector('.username-success-feedback')

   if (paragraphInputFeedbackExists) {
      paragraphInputFeedback.remove()
   }

   if (!isAValidUsername) {
      paragraphSubmitFeedback.setAttribute('class', 'username-help-submit')
      paragraphSubmitFeedback.textContent = 'Por favor, insira um nome de usuário válido.'
      paragraphSubmitFeedback.style.color = '#E8B635'
      button.insertAdjacentElement('afterend', paragraphSubmitFeedback)
      return
   }

   paragraphSubmitFeedback.setAttribute('class', 'username-success-submit')
   paragraphSubmitFeedback.textContent = 'Dados enviados!'
   paragraphSubmitFeedback.style.color = '#6EC080'
   button.insertAdjacentElement('afterend', paragraphSubmitFeedback)
})