const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = '☀️'; // Ícone para quando estiver no dark mode


const selectedTheme = localStorage.getItem('selected-theme');

//Função para obter o tema atual
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

//Aplicar o tema salvo se tiver um 
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.innerText = selectedTheme === 'dark' ? '☀️' : '🌙';
}

// Ativar ou desativar o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adiciona ou remove a classe dark-theme
    document.body.classList.toggle(darkTheme);
    
    // Troca o ícone do botão
    if(getCurrentTheme() === 'dark') {
        themeButton.innerText = '☀️';
    } else {
        themeButton.innerText = '🌙';
    }

    // Salva o tema atual no localStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
});