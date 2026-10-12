<!-- Este template foi adaptado para o projeto Portfólio Profissional -->

---

# 🏷️ Portfólio Profissional de Matheus Romling 👨‍💻

> [!NOTE]
> Website de portfólio profissional desenvolvido para apresentar minha trajetória, habilidades, projetos e formas de contato de maneira moderna e acessível.  

Este **README.md** documenta o desenvolvimento do projeto **Portfólio Profissional** para a disciplina de **Desenvolvimento de Interfaces Web (DIW)**. O objetivo principal deste projeto é criar uma plataforma _responsiva_, _bilingue_ e com _integrações reais_ (como envio de e-mails), aplicando na prática os conceitos de Front-end com frameworks modernos. O sistema inclui seções dedicadas à apresentação pessoal, timeline interativa de projetos, histórico de experiências e um formulário de contato funcional.

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação e Execução](#-instalação-e-execução)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Autores](#-autores)

---

## 🔗 Links Úteis
* 🌐 **Demo Online:** [Link de acesso para o site publicado na nuvem será inserido aqui na S03]
  > 💻 **Descrição:** O projeto final será hospedado gratuitamente na plataforma Vercel.

---

## 📝 Sobre o Projeto
Este projeto consiste no desenvolvimento do meu portfólio profissional web, criado como requisito avaliativo (Lab01) para a disciplina de Desenvolvimento de Interfaces Web.

O sistema resolve a necessidade de centralizar e expor profissionalmente o meu currículo, experiências passadas, projetos de código aberto e formas de contato direto para potenciais recrutadores ou parceiros de projetos, garantindo acessibilidade (português/inglês) e suporte a dispositivos móveis.

---

## ✨ Funcionalidades Principais
- 👤 **Sobre Mim (Bilingue):** Apresentação com alternância de idioma (Português/Inglês).
- 📅 **Timeline de Projetos:** Linha do tempo interativa exibindo os projetos com links para o GitHub e visualização em imagem/GIF.
- 💼 **Experiências Profissionais:** Histórico de estágios e projetos formatados cronologicamente.
- 📨 **Contato Funcional:** Formulário integrado (via EmailJS) que permite o envio real de mensagens diretamente para a minha caixa de entrada, além de ícones diretos para redes sociais (LinkedIn, GitHub).
- 📱 **Design Responsivo:** Layout adaptável para telemóveis, tablets e monitores.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end
* **Framework/Biblioteca:** React
* **Estilização:** Tailwind CSS (para prototipagem rápida e responsividade)
* **Build Tool:** Vite
* **Integrações:** EmailJS (para envio de formulários sem back-end dedicado)

### ⚙️ Infraestrutura & DevOps
* **Hospedagem / Cloud:** Vercel (hospedagem gratuita para sites estáticos/React)
* **Controle de Versão:** Git e GitHub

---

## 🔧 Instalação e Execução

### Pré-requisitos
* **Node.js:** Versão 18.x ou superior.
* **Gerenciador de Pacotes:** npm ou yarn.

### 🔑 Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e configure as chaves do EmailJS para que o formulário de contato funcione localmente.

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `VITE_EMAILJS_SERVICE_ID` | ID do serviço criado no EmailJS. | `service_xxx` |
| `VITE_EMAILJS_TEMPLATE_ID` | ID do template criado no EmailJS. | `template_xxx` |
| `VITE_EMAILJS_PUBLIC_KEY` | Chave pública da sua conta EmailJS. | `chave_publica_aqui` |

### 📦 Instalação e Como Executar

1. **Clone o Repositório:**
```bash
git clone [URL do repositório a ser criado]
cd portfolio-profissional
```

2. **Instale as Dependências:**
```bash
npm install
```

3. **Inicie o Servidor de Desenvolvimento:**
```bash
npm run dev
```
🎨 *O site estará disponível em **http://localhost:5173**.*

---

## 📂 Estrutura de Pastas (Inicial)

```
.
├── .env.example                 # 🧩 Exemplo de variáveis do EmailJS.
├── .gitignore                   # 🧹 Ignora arquivos/pastas não versionadas.
├── README.md                    # 📘 Documentação principal do projeto.
├── index.html                   # 📄 Ponto de entrada do Front-end.
├── package.json                 # 📦 Dependências e scripts do React/Vite.
│
├── /src                         # 📂 Código-fonte React
│   ├── /components              # 🧱 Componentes (Header, Footer, Timeline, Cards).
│   ├── /pages                   # 📄 Páginas (Home, Sobre, Projetos, Experiencias, Contato).
│   ├── /assets                  # 🖼️ Recursos estáticos (Imagens, GIFs, Ícones).
│   ├── App.jsx                  # ⚙️ Componente raiz.
│   └── main.jsx                 # 🚀 Inicialização da aplicação.
```

---

## 🎥 Demonstração

> [!NOTE]
> Os Wireframes de média fidelidade do Figma e as capturas de tela finais serão anexados nesta seção ao final das Sprints de desenvolvimento.

---

## 👥 Autores

| 👤 Nome | :octocat: GitHub |
|---------|-----------------|
| Matheus Romling | <a href="https://github.com/Matheus-Romling">https://github.com/Matheus-Romling</a> |

---

## 🙏 Agradecimentos
* Pela infraestrutura e apoio acadêmico do curso.
* Pela instrução e template documentacional fornecido para o projeto.