<!-- Template adaptado para o projeto Portfólio Profissional (DIW - PUC Minas) -->

---

# 🏷️ Portfólio Profissional de Matheus Romling 👨‍💻

> [!NOTE]
> Website de portfólio profissional desenvolvido para apresentar minha trajetória acadêmica, habilidades técnicas, projetos práticos e canais de contato de forma moderna, interativa e acessível.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este <b>README.md</b> documenta o desenvolvimento do projeto <b>Portfólio Profissional</b>, concebido como parte das atividades práticas da disciplina de <b>Desenvolvimento de Interfaces Web (DIW)</b> no curso de <b>Ciência da Computação da PUC Minas</b>, sob orientação do <a href="https://github.com/joaopauloaramuni">Prof. Dr. João Paulo Aramuni</a>. O objetivo principal deste projeto é consolidar fundamentos sólidos de front-end, arquitetando uma aplicação web moderna, totalmente <i>responsiva</i>, <i>bilíngue (Português/Inglês)</i> e integrada a serviços de terceiros (como envio de e-mails em tempo real via <i>EmailJS</i>), seguindo rigorosas boas práticas de usabilidade, acessibilidade e estruturação de código.
      </div>
    </td>
    <td>
      <div align="center">
        <img src="https://joaopauloaramuni.github.io/image/cc-puc.jpg" alt="Logo PUC Minas" width="120px"/>
      </div>
    </td>
  </tr> 
</table>

---

## 🚧 Status do Projeto

[![Versão](https://img.shields.io/badge/Versão-v1.0.0-blue?style=for-the-badge)](https://github.com/Matheus-Romling/Portifolio/releases)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6C37?style=for-the-badge&logo=mailgun&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
[![Licença](https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge)](#-licença)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura do Front-end](#-arquitetura-do-front-end)
- [Instalação e Execução Local](#-instalação-e-execução-local)
  - [Pré-requisitos](#pré-requisitos)
  - [Integração com EmailJS](#-integração-com-emailjs)
  - [Como Executar](#-como-executar)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Testes e Validações](#-testes-e-validações)
- [Documentações Utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Demo Online:** [Acesse o Portfólio Online (GitHub Pages / Vercel)](https://matheus-romling.github.io/Portifolio/portfolio/)
  > 💻 **Descrição:** Link para a aplicação em ambiente de produção com suporte a navegação completa.
* 📦 **Repositório do Código:** [https://github.com/Matheus-Romling/Portifolio](https://github.com/Matheus-Romling/Portifolio)
  > 📂 **Descrição:** Acesso ao código-fonte completo, histórico de commits e documentação.

---

## 📝 Sobre o Projeto

Este projeto consiste no desenvolvimento do meu **Portfólio Profissional Web**, elaborado como requisito avaliativo para o **Laboratório 01** da disciplina de **Desenvolvimento de Interfaces Web (DIW)** da PUC Minas.

### 🎯 Motivação e Problema Resolvido
No mercado de tecnologia e no ecossistema acadêmico, profissionais e estudantes de Ciência da Computação precisam de um ponto centralizado, público e acessível para apresentar seu currículo, competências algorítmicas, histórico acadêmico e projetos desenvolvidos. 

O portfólio resolve essa necessidade através de uma interface limpa, intuitiva e rápida:
- **Centralização:** Reúne biografia, projetos no GitHub, experiência em programação competitiva e contatos em um só lugar.
- **Acessibilidade e Alcance Internacional:** Apresenta suporte nativo a dois idiomas (Português e Inglês) acionável em tempo real.
- **Canal de Comunicação Direto:** Possibilita que recrutadores e visitantes enviem mensagens reais sem precisar abrir clientes externos de e-mail.

---

## ✨ Funcionalidades Principais

- 👤 **Sobre Mim (Apresentação Pessoal):** Seção introdutória detalhando perfil acadêmico na PUC Minas, áreas de interesse (Desenvolvimento Web, Engenharia de Software e Lógica) e fotografia de perfil.
- 🌐 **Internacionalização Dinâmica (i18n):** Alternância instantânea de idioma (**PT / EN**) para todos os textos, menus, títulos, datas e *placeholders* de formulário, sem recarregar a página.
- 📅 **Timeline de Projetos:** Linha do tempo visual destacando projetos desenvolvidos, tecnologias empregadas (*tags*) e links diretos para os repositórios correspondentes no GitHub.
- 💼 **Experiências Acadêmicas & Competitivas:** Cartões dedicados destacando a graduação em Ciência da Computação e a ampla prática em **Programação Competitiva com C++** (estruturas de dados, algoritmos e otimização).
- 📨 **Formulário de Contato Funcional:** Envio real de mensagens integrado à API do **EmailJS**, com validação de campos, feedback visual de envio e tratamento de erros.
- 🔗 **Acessos Rápidos a Redes:** Botões diretos para LinkedIn, GitHub e E-mail pessoal.
- 📱 **Navegação Suave e Responsiva:** Menu de navegação fixo (*sticky header*) com rolagem suave (*smooth scroll*) para todas as seções.

---

## 🛠 Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias fundamentais da web moderna com foco em performance, acessibilidade e simplicidade:

### 💻 Front-end
* **HTML5 Semântico:** Estruturação orientada a padrões (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), garantindo acessibilidade e indexação (SEO).
* **CSS3 Moderno:** Estilização com Flexbox, variáveis, animações de transição suave e posicionamento relativo/absoluto para elementos dinâmicos (como a linha vertical da timeline).
* **JavaScript (ES6+ Vanilla):** Lógica limpa para manipulação do DOM, controle do estado de idioma ativo e integração assíncrona com API de terceiros.
* **EmailJS Browser SDK (v4):** Biblioteca client-side que permite o disparo direto de e-mails via SMTP serverless sem necessidade de back-end dedicado.

### ⚙️ Infraestrutura & Ferramentas
* **Controle de Versão:** Git e GitHub.
* **Hospedagem & Deploy:** GitHub Pages / Vercel.
* **Ambiente de Desenvolvimento:** Antigravity IDE / VS Code com Live Server.

---

## 🏗 Arquitetura do Front-end

A aplicação foi estruturada seguindo uma arquitetura **Single-Page Application (SPA)** leve e estática, dividida em três camadas conceituais:

```
+-------------------------------------------------------------+
|                      Camada de Visualização                 |
|       (HTML5 Semântico + CSS3 Estilizado + Tipografia)      |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                     Camada de Interatividade                |
|           (JavaScript Vanilla - script.js)                  |
|  - Alternador de Idioma (PT/EN + Placeholders Dinâmicos)     |
|  - Gerenciador de Eventos e Feedback de UI                 |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                  Serviço Externo Serverless                 |
|             (EmailJS Browser SDK / REST API)                |
|  - Envio autenticado via Service ID, Template ID e Key      |
|  - Disparo de e-mail direto para a caixa de entrada         |
+-------------------------------------------------------------+
```

### Decisões Arquiteturais
1. **Zero Dependências Pesadas:** A decisão de utilizar HTML, CSS e JavaScript puros garante tempo de carregamento praticamente instantâneo e facilidade de manutenção.
2. **Serverless Form Handling:** O uso do EmailJS elimina a necessidade de manter e custear um servidor back-end exclusivamente para receber mensagens de contato.
3. **Internacionalização por Classes:** A técnica de classes `.lang-pt` e `.lang-en` com `.hidden` (`display: none !important`) permite chaveamento de idioma atômico e sem requisições adicionais de rede.

---

## 🔧 Instalação e Execução Local

### Pré-requisitos
Para visualizar e testar o projeto localmente, você precisa apenas de:
* Um navegador web moderno (Google Chrome, Firefox, Microsoft Edge ou Safari).
* Opcional: Extensão **Live Server** no VS Code ou o utilitário `serve` via Node.js.

---

### 🔑 Integração com EmailJS
O formulário de contato utiliza o EmailJS configurado no arquivo [`portfolio/script.js`](portfolio/script.js). As credenciais do serviço estão estruturadas da seguinte forma:

| Parâmetro | Finalidade |
| :--- | :--- |
| `Public Key` | Identificação pública do remetente (`emailjs.init("...")`) |
| `Service ID` | Serviço de e-mail configurado no painel do EmailJS |
| `Template ID` | Modelo de e-mail com as tags `{{nome}}`, `{{email}}` e `{{mensagem}}` |

---

### ⚡ Como Executar

1. **Clone o Repositório:**
```bash
git clone https://github.com/Matheus-Romling/Portifolio.git
cd Portifolio
```

2. **Abra o Projeto:**
* **Opção 1 (Direto pelo Navegador):** Basta dar dois cliques no arquivo `portfolio/index.html` ou abri-lo no seu navegador.
* **Opção 2 (Com Live Server):** Abra a pasta no VS Code / Antigravity, clique com o botão direito em `portfolio/index.html` e selecione **"Open with Live Server"**.
* **Opção 3 (Servidor estático via terminal):**
```bash
# Com Python 3:
cd portfolio
python -m http.server 3000

# Ou com Node.js (npx serve):
npx serve portfolio
```
Acesse no navegador através de: `http://localhost:3000`

---

## 🚀 Deploy

A aplicação pode ser publicada gratuitamente de forma muito simples:

### Deploy no GitHub Pages
1. Acesse o repositório no GitHub.
2. Vá em **Settings** > **Pages**.
3. Em **Branch**, selecione a branch `main` e aponte para a pasta raiz (`/`) ou configure uma Action de deploy estático.
4. Salve e acesse a URL gerada pelo GitHub Pages.

### Deploy na Vercel
1. Conecte sua conta do GitHub na [Vercel](https://vercel.com).
2. Importe o repositório `Portifolio`.
3. Defina o **Root Directory** como `portfolio` (ou deixe na raiz).
4. Clique em **Deploy**.

---

## 📂 Estrutura de Pastas

A estrutura do repositório é organizada de forma clara e intuitiva:

```
.
├── documents/                                           # 📚 Documentação acadêmica e enunciado do laboratório
│   ├── LABORATORIO 01 - Portfolio Profissional.pdf      # 📄 Roteiro de requisitos da disciplina
│   └── template_README.md                               # 📑 Template de referência do Prof. Dr. João Paulo Aramuni
│
├── portfolio/                                           # 🌐 Aplicação web completa do portfólio
│   ├── images/                                          # 🖼️ Recursos de imagem
│   │   └── fotoPrincipal.png                            # 👤 Foto de perfil do desenvolvedor
│   ├── index.html                                       # 📄 Estrutura semântica e conteúdo da página
│   ├── script.js                                        # ⚙️ Lógica de alternância de idiomas e integração EmailJS
│   └── style.css                                        # 🎨 Estilos globais, layout e responsividade
│
├── README.md                                            # 📘 Documentação principal deste repositório
└── LICENSE                                              # ⚖️ Licença de uso de código aberto
```

---

## 🎥 Demonstração

### 🌐 Aplicação Web
O portfólio conta com seções estruturadas para proporcionar uma experiência de leitura agradável e direta:

| Seção | Descrição |
| :---: | :--- |
| **Sobre Mim** | Apresentação com foto, resumo de formação e objetivos acadêmicos. |
| **Projetos** | Linha do tempo vertical com tags tecnológicas e links externos para o GitHub. |
| **Experiências** | Destaque para o curso de Ciência da Computação e foco em Programação Competitiva em C++. |
| **Contato** | Formulário funcional com integração EmailJS e links diretos para LinkedIn e GitHub. |

> [!TIP]
> Para testar a funcionalidade bilíngue, basta clicar no botão **EN / PT** localizado no canto superior direito do menu de navegação.

---

## 🧪 Testes e Validações

O projeto foi validado seguindo critérios práticos de qualidade e usabilidade:

- [x] **Compatibilidade Cross-Browser:** Testado e aprovado no Google Chrome, Microsoft Edge e Mozilla Firefox.
- [x] **Alternância de Idiomas (i18n):** Verificação de que 100% dos textos e *placeholders* mudam de idioma sem deixar resquícios não traduzidos.
- [x] **Envio de Formulário:** Testes de envio com dados reais recebidos com sucesso na caixa de entrada do desenvolvedor via EmailJS.
- [x] **Links Externos:** Todos os links para repositórios do GitHub e redes sociais abrem corretamente em novas abas (`target="_blank"`).
- [x] **Semântica HTML:** Validação semântica e ausência de erros no console do navegador.

---

## 🔗 Documentações Utilizadas

* 📖 **HTML5 & CSS3:** [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web)
* 📖 **JavaScript Moderno:** [JavaScript Info](https://javascript.info/)
* 📖 **EmailJS SDK:** [Documentação Oficial do EmailJS](https://www.emailjs.com/docs/)
* 📖 **Template Acadêmico:** [Repositório do Prof. Dr. João Paulo Aramuni](https://github.com/joaopauloaramuni)

---

## 👥 Autores

| 👤 Nome | 💼 Curso / Instituição | :octocat: GitHub | 💼 LinkedIn | 📤 E-mail |
|:---:|:---:|:---:|:---:|:---:|
| **Matheus Romling** | Ciência da Computação <br> PUC Minas | <a href="https://github.com/Matheus-Romling">Matheus-Romling</a> | <a href="https://linkedin.com/in/matheus-romling-rotheia-almeida-264761418">LinkedIn</a> | <a href="mailto:matheus.romling.ra@gmail.com">E-mail</a> |

---

## 🙏 Agradecimentos

* À **PUC Minas** e ao corpo docente do curso de **Ciência da Computação** pelo incentivo contínuo ao desenvolvimento técnico.
* Ao [**Prof. Dr. João Paulo Aramuni**](https://github.com/joaopauloaramuni) pela elaboração dos laboratórios, fornecimento do modelo documental e incentivo às melhores práticas de desenvolvimento.

---

## 📄 Licença

Este projeto é distribuído sob a **[Licença MIT](LICENSE)**.
