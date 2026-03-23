
// Seleciona os elementos do formulário
const formInput = document.querySelector('#form-contact');
const nameInput = document.querySelector('#userName');
const emailInput = document.querySelector('#userEmail');
const messageInput = document.querySelector('#userMessage');
const submitButton = document.querySelector('#submit');

// Adiciona um evento de clique ao botão de envio
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Chama a função para verificar os inputs
    checkInputs();
});

// Função para verificar os inputs do formulário
function checkInputs() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    // Verifica se o campo nome está vazio
    if (nameValue === '') {
        alert('Por favor, preencha o campo de nome.');
        return; 
    }  
    
   // Verifica se o campo email está vazio
    if (emailValue === '') {
        alert('Por favor, preencha o campo de email.');
        return;
    }  
    
    // Verifica se o email é válido
    if (!checkEmail(emailValue)) {
        alert('Por favor, insira um endereço de email válido.');
        return;
    }  
    
    // Verifica se o campo mensagem está vazio
    if (messageValue === '') {
        alert('Por favor, preencha o campo de mensagem.');
        return;
    }

    // Se todos os campos estiverem preenchidos corretamente, exibe uma mensagem de sucesso
    alert('Sucesso! Sua mensagem foi enviada.');
    formInput.reset(); 
};

// Função para validar o formato do email   (Usei um regex para validaro email)
function checkEmail(emailInput) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailInput
  );
};


