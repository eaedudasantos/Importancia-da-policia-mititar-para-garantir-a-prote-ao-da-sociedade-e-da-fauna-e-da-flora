document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidade de Modo Escuro (Dark Mode)
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Checa se o usuário já preferia o modo escuro anteriormente
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    // Adiciona o evento de clique ao botão
    darkModeToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que o link navegue
        body.classList.toggle('dark-mode');

        // Salva a preferência do usuário no armazenamento local
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Você pode adicionar outras interações aqui, como:
    // - Animações ao rolar a página
    // - Um carrossel de imagens na galeria
    // - Validação de um formulário de contato (se houver)

});