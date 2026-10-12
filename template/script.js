// Lógica para alternar entre Português e Inglês
const btnIdioma = document.getElementById('btn-idioma');
const textosPT = document.querySelectorAll('.lang-pt');
const textosEN = document.querySelectorAll('.lang-en');

let idiomaAtual = 'PT'; // Começa em português

btnIdioma.addEventListener('click', () => {
    if (idiomaAtual === 'PT') {
        // Muda para Inglês
        textosPT.forEach(elemento => elemento.classList.add('hidden'));
        textosEN.forEach(elemento => elemento.classList.remove('hidden'));
        btnIdioma.innerText = 'PT'; // O botão agora sugere voltar para PT
        idiomaAtual = 'EN';
    } else {
        // Volta para Português
        textosEN.forEach(elemento => elemento.classList.add('hidden'));
        textosPT.forEach(elemento => elemento.classList.remove('hidden'));
        btnIdioma.innerText = 'EN'; // O botão agora sugere ir para EN
        idiomaAtual = 'PT';
    }
});