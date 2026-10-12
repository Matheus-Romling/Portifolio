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
        document.querySelectorAll('[data-placeholder-en]').forEach(el => {
            el.placeholder = el.getAttribute('data-placeholder-en');
        });
        document.documentElement.lang = 'en';
        btnIdioma.innerText = 'PT'; // O botão agora sugere voltar para PT
        idiomaAtual = 'EN';
    } else {
        // Volta para Português
        textosEN.forEach(elemento => elemento.classList.add('hidden'));
        textosPT.forEach(elemento => elemento.classList.remove('hidden'));
        document.querySelectorAll('[data-placeholder-pt]').forEach(el => {
            el.placeholder = el.getAttribute('data-placeholder-pt');
        });
        document.documentElement.lang = 'pt-BR';
        btnIdioma.innerText = 'EN'; // O botão agora sugere ir para EN
        idiomaAtual = 'PT';
    }
});

emailjs.init("U1R4V6IXPTa5RrJUl");

const form = document.getElementById('form-contato');
const statusMsg = document.getElementById('status-msg');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // O botão altera o texto para dar feedback visual
    const btn = form.querySelector('button[type="submit"]:not(.hidden)');
    const textoOriginal = btn.innerText;
    btn.innerText = idiomaAtual === 'PT' ? 'Enviando...' : 'Sending...';

    // Captura os dados inseridos
    const parametros = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('mensagem').value
    };

    // Envia usando o seu Service ID e Template ID
    emailjs.send("service_4d4m4u9", "template_97huzpk", parametros)
        .then(function(resposta) {
            statusMsg.style.color = 'green';
            statusMsg.innerText = idiomaAtual === 'PT' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!';
            form.reset(); // Limpa os campos
            btn.innerText = textoOriginal;
        }, function(erro) {
            statusMsg.style.color = 'red';
            statusMsg.innerText = idiomaAtual === 'PT' ? 'Erro ao enviar mensagem.' : 'Failed to send message.';
            btn.innerText = textoOriginal;
            console.error("Erro do EmailJS:", erro);
        });
});