// Idioma
const btnIdioma = document.getElementById('btn-idioma');
const textosPT = document.querySelectorAll('.lang-pt');
const textosEN = document.querySelectorAll('.lang-en');

let idiomaAtual = 'PT';

btnIdioma.addEventListener('click', () => {
    if (idiomaAtual === 'PT') {
        textosPT.forEach(elemento => elemento.classList.add('hidden'));
        textosEN.forEach(elemento => elemento.classList.remove('hidden'));
        document.querySelectorAll('[data-placeholder-en]').forEach(el => {
            el.placeholder = el.getAttribute('data-placeholder-en');
        });
        document.documentElement.lang = 'en';
        btnIdioma.innerText = 'PT';
        idiomaAtual = 'EN';
    } else {
        textosEN.forEach(elemento => elemento.classList.add('hidden'));
        textosPT.forEach(elemento => elemento.classList.remove('hidden'));
        document.querySelectorAll('[data-placeholder-pt]').forEach(el => {
            el.placeholder = el.getAttribute('data-placeholder-pt');
        });
        document.documentElement.lang = 'pt-BR';
        btnIdioma.innerText = 'EN';
        idiomaAtual = 'PT';
    }
});

// Contato
emailjs.init("U1R4V6IXPTa5RrJUl");

const form = document.getElementById('form-contato');
const statusMsg = document.getElementById('status-msg');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = form.querySelector('button[type="submit"]:not(.hidden)');
    const textoOriginal = btn.innerText;
    btn.innerText = idiomaAtual === 'PT' ? 'Enviando...' : 'Sending...';

    const parametros = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('mensagem').value
    };

    emailjs.send("service_4d4m4u9", "template_97huzpk", parametros)
        .then(function(resposta) {
            statusMsg.style.color = '#4ade80';
            statusMsg.innerText = idiomaAtual === 'PT' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!';
            form.reset();
            btn.innerText = textoOriginal;
        }, function(erro) {
            statusMsg.style.color = '#f87171';
            statusMsg.innerText = idiomaAtual === 'PT' ? 'Erro ao enviar mensagem.' : 'Failed to send message.';
            btn.innerText = textoOriginal;
            console.error("Erro do EmailJS:", erro);
        });
});

// Modal
const contatosData = {
    gmail: {
        titulo: 'Gmail',
        info: 'matheus.romling.ra@gmail.com',
        link: 'mailto:matheus.romling.ra@gmail.com',
        icone: 'images/gmail.svg',
        linkTexto: { PT: 'Enviar E-mail', EN: 'Send Email' }
    },
    whatsapp: {
        titulo: 'WhatsApp',
        info: '+55 31 8950-1742',
        link: 'https://wa.me/553189501742',
        icone: 'images/whatsapp.svg',
        linkTexto: { PT: 'Conversar', EN: 'Chat' }
    },
    discord: {
        titulo: 'Discord',
        info: 'romling',
        link: 'https://discord.com',
        icone: 'images/discord.svg',
        linkTexto: { PT: 'Abrir Discord', EN: 'Open Discord' }
    }
};

const modal = document.getElementById('modal-contato');
const modalFechar = document.getElementById('modal-fechar');
const modalImg = document.getElementById('modal-img');
const modalTitulo = document.getElementById('modal-titulo');
const modalInfo = document.getElementById('modal-info');
const modalBtnCopiar = document.getElementById('modal-btn-copiar');
const modalLinkAcao = document.getElementById('modal-link-acao');

document.querySelectorAll('[data-modal]').forEach(botao => {
    botao.addEventListener('click', () => {
        const tipo = botao.getAttribute('data-modal');
        const dados = contatosData[tipo];
        if (!dados) return;

        modalImg.src = dados.icone;
        modalImg.alt = dados.titulo;
        modalTitulo.innerText = dados.titulo;
        modalInfo.innerText = dados.info;
        modalLinkAcao.href = dados.link;
        modalLinkAcao.innerText = dados.linkTexto[idiomaAtual] || 'Abrir';

        modalBtnCopiar.innerText = idiomaAtual === 'PT' ? 'Copiar' : 'Copy';
        modalBtnCopiar.setAttribute('data-copiar', dados.info);

        modal.classList.remove('hidden');
    });
});

function fecharModal() {
    modal.classList.add('hidden');
}

modalFechar.addEventListener('click', fecharModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        fecharModal();
    }
});

modalBtnCopiar.addEventListener('click', () => {
    const texto = modalBtnCopiar.getAttribute('data-copiar');
    navigator.clipboard.writeText(texto).then(() => {
        modalBtnCopiar.innerText = idiomaAtual === 'PT' ? 'Copiado!' : 'Copied!';
        setTimeout(() => {
            modalBtnCopiar.innerText = idiomaAtual === 'PT' ? 'Copiar' : 'Copy';
        }, 2000);
    });
});