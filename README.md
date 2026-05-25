markdown
# 🌱 Agrinho 2026 — Agro Forte, Futuro Sustentável

## [link do projeto](https://joaoroberto988.github.io/agrinho-2026-2/)

![Agrinho 2026](https://img.shields.io/badge/Agrinho-2026-2d6a3f?style=for-the-badge&logo=leaflet&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/STATUS-CONCLUÍDO-success?style=for-the-badge)
![Licença](https://img.shields.io/badge/LICENÇA-MIT-blue?style=for-the-badge)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tema 2026](#-tema-2026)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar](#-como-executar)
- [Seções da Página](#-seções-da-página)
- [Destaques Técnicos](#-destaques-técnicos)
- [Paleta de Cores](#-paleta-de-cores)
- [Responsividade](#-responsividade)
- [Performance e SEO](#-performance-e-seo)
- [Créditos e Referências](#-créditos-e-referências)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 📖 Sobre o Projeto

Projeto desenvolvido para o **Programa Agrinho 2026**, maior iniciativa de responsabilidade socioambiental do estado do Paraná. Esta aplicação web foi criada para ser um **projeto campeão**, combinando design de alto impacto, interatividade avançada e conteúdo rico sobre sustentabilidade no campo.

A página única (Single Page Application) apresenta de forma envolvente o equilíbrio entre produção agrícola e preservação ambiental, utilizando recursos visuais modernos como animações 3D, partículas interativas, contadores animados e efeitos de glassmorphism.

---

## 🎯 Tema 2026

> **"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"**

O projeto explora quatro pilares fundamentais:
1. **💧 Uso Inteligente da Água** — Irrigação de precisão e proteção de nascentes
2. **🌳 Preservação de Matas Nativas** — Respeito ao Código Florestal e corredores ecológicos
3. **☀️ Energia Limpa no Campo** — Fontes renováveis e biodigestores
4. **🔄 Economia Circular** — Transformação de resíduos em novos recursos

---

## 🎬 Demonstração

![Preview do Projeto](https://via.placeholder.com/800x400/1b4332/f5d78c?text=Agrinho+2026+Preview)

> **💡 Dica:** Para uma experiência completa, abra o projeto em um navegador desktop com resolução de 1920x1080 ou superior, pois há efeitos visuais que brilham em telas maiores (como o cursor personalizado).

---

## ✨ Funcionalidades

### 🖥️ Visuais e Interatividade
- **Preloader animado** com anéis giratórios
- **Cursor personalizado** com rastro dourado (em dispositivos com mouse)
- **Canvas de partículas** flutuantes (folhas e pontos de luz) no Hero
- **Efeito Tilt 3D** nos cards dos pilares (responde ao movimento do mouse)
- **Contadores animados** que disparam ao entrar na tela
- **Slider de cases** com navegação por botões e dots, além de autoplay
- **Timeline interativa** com efeito hover
- **Balança simbólica** com animação de oscilação
- **Botão "Voltar ao Topo"** flutuante
- **Scroll reveal** progressivo em todas as seções

### 🎨 Design
- **Glassmorphism** (efeito vidro) em elementos do Hero e navegação
- **Gradientes animados** no texto principal
- **Ondas SVG** na transição do Hero
- **Background com grid** sutil e brilhos orgânicos
- **Scrollbar customizada** nos tons do projeto
- **Paleta de cores** que simboliza natureza (verdes) e riqueza (dourado)

### 🧭 Navegação
- **Menu sticky** com backdrop-filter (desfoque de fundo)
- **Links âncora** com rolagem suave
- **Indicador de seção ativa** no menu conforme rolagem
- **Totalmente responsivo** (desktop, tablet e mobile)

---

## 📁 Estrutura do Projeto
agrinho-2026/
│
├── index.html # Arquivo único com HTML, CSS e JS incorporados
│
├── assets/ # (Opcional) Pasta para imagens e ícones externos
│ ├── favicon.ico
│ └── og-image.jpg # Imagem para compartilhamento em redes sociais
│
├── README.md # Este arquivo
│
└── LICENSE # Licença MIT

text

> **Nota:** Todo o código está em um único arquivo `index.html` para facilitar a entrega e execução, sem dependências externas.

---

## 🔧 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura semântica e canvas para partículas |
| **CSS3** | Variáveis customizadas, Grid, Flexbox, animações, backdrop-filter |
| **JavaScript (Vanilla)** | Manipulação do DOM, Intersection Observer, requestAnimationFrame, eventos de mouse |
| **SVG** | Ondas vetoriais escaláveis |

**Zero dependências externas** — sem bibliotecas, sem frameworks, sem arquivos CSS/JS adicionais.

---

## 🚀 Como Executar

### Opção 1: Abertura direta (recomendado)
1. Faça o download do arquivo `index.html`
2. Abra-o em qualquer navegador moderno (Chrome, Firefox, Edge, Safari)
3. Pronto! O projeto carrega instantaneamente.

### Opção 2: Servidor local (para desenvolvimento)
```bash
# Usando Python 3
python -m http.server 8080

# Usando Node.js (npx)
npx serve .

# Usando PHP
php -S localhost:8080
Acesse http://localhost:8080 no navegador.

Opção 3: GitHub Pages
Crie um repositório no GitHub

Faça upload do index.html

Ative o GitHub Pages em Settings → Pages

Seu projeto estará online em https://seuusuario.github.io/agrinho-2026/

📑 Seções da Página
Seção	ID	Conteúdo
Hero	#topo	Título principal, subtítulo, botões CTA, partículas canvas
Pilares	#pilares	4 cards 3D com tilt mostrando os fundamentos
Equilíbrio	#equilibrio	Balança visual comparando Produção vs Meio Ambiente
Dados	#dados	4 contadores animados com estatísticas reais
Evolução	#evolucao	Timeline com 5 marcos históricos (1990–2026)
Cases	#projetos	Slider com 3 projetos inspiradores do Paraná
CTA Final	#futuro	Chamada para ação e botão de retorno ao topo
Rodapé	—	Links, contato e assinatura
🌟 Destaques Técnicos
Canvas de Partículas
javascript
class Particula {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 200;
        this.velocidadeY = -(Math.random() * 1.2 + 0.4);
        this.tipo = Math.random() > 0.5 ? 'folha' : 'luz';
    }
}
70 partículas (folhas verdes e pontos dourados) flutuam suavemente no fundo do Hero, criando atmosfera orgânica.

Efeito Tilt 3D
Os cards dos pilares inclinam-se conforme a posição do mouse, usando perspective e rotateX/Y:

javascript
const rotacaoY = ((x - centroX) / centroX) * 12;
const rotacaoX = -((y - centroY) / centroY) * 12;
inner.style.transform = `perspective(800px) rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg)`;
Contadores Animados
Usam requestAnimationFrame com easing cúbico para suavizar a contagem:

javascript
const ease = 1 - Math.pow(1 - progresso, 3);
// progresso vai de 0 a 1 durante 2.2 segundos
Intersection Observer
Duas instâncias do Observer gerenciam:

Disparo dos contadores quando a seção de estatísticas entra na tela

Revelação progressiva (scroll reveal) de todas as seções

🎨 Paleta de Cores
Cor	Código	Uso
Verde Profundo	#0a1f14	Fundo do Hero, rodapé
Verde Escuro	#122e1f	Textos principais
Verde Médio	#1b4332	Gradientes
Verde Vivo	#2d6a3f	Elementos de destaque
Verde Claro	#40916c	Timeline, cards
Verde Limão	#52b788	Ícones, acentos
Dourado	#c8943e	Títulos em gradiente, botões
Dourado Brilho	#e8b85c	Hover, sombras
Terra	#8b5a2b	Balança (produção)
📱 Responsividade
O projeto adapta-se a todos os tamanhos de tela:

Dispositivo	Comportamento
Desktop (1920px+)	Layout completo com cursor personalizado e tilt 3D
Tablet (768px–1024px)	Grid ajustado, cards em 2 colunas
Mobile (<768px)	Menu empilhado, balança em coluna, timeline compactada
Mobile pequeno (<480px)	Cards em 1 coluna, fontes reduzidas
⚡ Performance e SEO
Zero requisições externas — carrega instantaneamente

Meta tags para Open Graph (compartilhamento em redes sociais)

HTML semântico (<header>, <nav>, <section>, <footer>)

Imagens inline (emojis e SVG) — sem carregamento de assets

CSS eficiente com variáveis customizadas evitando repetição

JavaScript otimizado com requestAnimationFrame e Intersection Observer

🏆 Por que este projeto é vencedor?
Impacto Visual — Design premium com tendências atuais (glassmorphism, tilt 3D, partículas)

Interatividade — Cada seção responde ao usuário (hover, scroll, clique)

Conteúdo Rico — Dados reais, cases inspiradores, linha do tempo histórica

Acessibilidade — Contraste adequado, navegação por teclado, texto alternativo em ícones

Código Limpo — Bem comentado, estruturado, sem dependências

Responsividade — Experiência fluida em qualquer dispositivo

Performance — Carrega em menos de 1 segundo

📸 Capturas de Tela
Hero Section
text
┌─────────────────────────────────────────┐
│  🌍 PROGRAMA AGRINHO 2026              │
│                                         │
│  Agro Forte,                            │
│  Futuro Sustentável                     │
│                                         │
│  O equilíbrio inteligente entre...      │
│                                         │
│  [Explorar Projeto] [Ver Equilíbrio]   │
│                                         │
│         🌱🌾🍃🌽☀️💧🌻🍀🌿🌎          │
│  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  │
└─────────────────────────────────────────┘
Seção de Equilíbrio (Balança)
text
┌──────────────┐  ⚖️  ┌──────────────┐
│  Produção    │       │  Meio        │
│  Forte       │       │  Ambiente    │
│              │       │              │
│  ✓ Grãos    │       │  ✓ Matas    │
│  ✓ Proteína │       │  ✓ Água     │
│  ✓ PIB 33%  │       │  ✓ Fauna    │
└──────────────┘       └──────────────┘
🔮 Melhorias Futuras (Roadmap)
Integração com API de dados climáticos em tempo real

Mapa interativo das nascentes protegidas

Calculadora de pegada de carbono para propriedades rurais

Modo escuro/claro alternável

Versão PWA para instalação offline

Internacionalização (inglês, espanhol)

📚 Créditos e Referências
Programa Agrinho — Sistema FAEP/SENAR-PR

Dados Estatísticos — Baseados em relatórios públicos do IBGE, IAT-PR e SEAB-PR

Emojis — Conjunto nativo do sistema operacional

Inspiração de Design — Tendências de UI/UX 2025/2026

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

text
MIT License

Copyright (c) 2026 [Seu Nome]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
📞 Contato
Desenvolvedor: [João Roberto Charnioski Syroka]
Escola: [Colégio Estadual Professor Mário Evaldo Morski ]
Cidade/Estado: [Pinhão], Paraná
E-mail: joao.syroka@escola.pr.gov.br


<div align="center">
🌍 "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"
Feito com 💚 para o Agrinho 2026

⭐ Se este projeto te inspirou, deixe uma estrela! ⭐

</div> ```