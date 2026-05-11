# Web 1 - IFSP

Repositório de projetos práticos do curso **Desenvolvimento Web 1** do Instituto Federal de São Paulo (IFSP).

Aqui você encontrará uma coleção de projetos didáticos focados no aprendizado de fundamentos web com HTML5, CSS3 e JavaScript.

**Professor:** Bianca Pedrosa  
**Período:** 2026  
**Última atualização:** 11 de maio de 2026

---

## 📁 Estrutura de Projetos

### 🍰 [Bolo](./listas/Bolo)

**Projeto Introdutório - HTML e CSS Básico**

Projeto inicial focado em aprender os conceitos fundamentais de desenvolvimento web.

**Arquivos:**

- `index.html` - Estrutura HTML básica com elementos semânticos
- `style.css` - Estilização CSS pura, sem frameworks

**Conceitos aprendidos:**

- Tags HTML semânticas
- Seletores CSS básicos
- Box model
- Tipografia
- Cores e fundos

**Objetivo principal:** Compreender a separação entre conteúdo (HTML) e apresentação (CSS)

---

### 🌿 [Plantas](./listas/plantas)

**Projeto de Estilização - Layout e Responsividade**

Exercício que explora estilos CSS e layout simples com imagens.

**Arquivos:**

- `index.html` - Conteúdo sobre plantas
- `estilo.css` - Estilos para layout e tipografia

**Objetivo:** Praticar posicionamento de elementos e uso de CSS para organização visual.

---

### 🧾 [Formulários](./formularios)

**Projetos de Formulários HTML + CSS**

#### 📝 [Cadastro](./formularios/cadastro)

Formulário de cadastro com validação básica.

#### 🎤 [DevCon](./formularios/devcon)

Formulário para evento DevCon.

#### 💬 [Feedback](./formularios/feedback)

Formulário de feedback.

**Conceitos:** Inputs, labels, validação, CSS para forms.

---

### 📊 [Tabelas](./tabelas)

**Projetos com Tabelas HTML**

#### 🚗 [Carros](./tabelas/Carros)

Tabela de carros com estilos.

#### 🕒 [Horário](./tabelas/horario)

Tabela de horários.

#### 👥 [Pessoas](./tabelas/pessoas)

Tabela de pessoas.

#### 📺 [Streaming](./tabelas/streaming)

Tabela de serviços de streaming.

**Conceitos:** Estrutura de tabelas, thead/tbody, estilização.

---

### 🏗️ [Semântica](./semantica)

**HTML Semântico**

- `index.html` - Exemplo de HTML semântico correto
- `div-soup.html` - Exemplo de "sopa de divs" (anti-padrão)

**Objetivo:** Entender a importância do HTML semântico para acessibilidade e SEO.

---

### 📱 [Responsividade](./responsividade)

**Design Responsivo com CSS**

#### 🎯 [Grid](./responsividade/grid)

Layout usando CSS Grid.

#### 📐 [Media Queries](./responsividade/mediaqueries)

Uso de media queries para responsividade.

**Conceitos:** Flexbox, Grid, Media Queries, Mobile-first.

---

### 🧠 [JavaScript](./javascript)

**Projetos com JavaScript**

#### 🧮 [Calculadora](./javascript/Calculadora)

Calculadora funcional com e sem eval.

#### 📋 [Arrays](./javascript/arrays)

Manipulação de arrays: carrinho, conversor, convidados, sorteador.

#### 🎉 [Festa](./javascript/festa)

Cálculo para festa: buffet.

#### 💰 [Gorjeta](./javascript/gorjeta)

Calculadora de gorjeta em grupo.

#### ⚖️ [Peso](./javascript/peso)

Calculadora de peso ideal.

**Conceitos:** Funções, arrays, DOM manipulation, eventos.

---

### 🌐 [DOM](./dom)

**Manipulação do DOM**

- `calculadora.html` - Calculadora com DOM
- `frutas.html` - Exemplo com frutas

**Conceitos:** getElementById, querySelector, event listeners.

---

### 🍽️ [DOM Cardápio](./dom-cardapio)

**Cardápio Interativo**

Sistema de pedido para restaurante usando DOM e módulos ES6.

**Arquivos:**

- `index.html` - Interface do cardápio
- `index.js` - Lógica JavaScript
- `dados.js` - Dados dos produtos
- `index.css` - Estilos

**Conceitos:** Módulos ES6, manipulação dinâmica do DOM, eventos.

---

### 🥗 [DOM Nutrição](./dom-nutricao)

**Aplicação de Nutrição**

Projeto de nutrição com DOM.

**Estrutura:** HTML, CSS, JS, imagens.

---

### 📈 [DOM Relatório](./dom-relatorio)

**Relatórios com DOM**

- `index.html` - Relatório básico
- `relatorioAsync.html` - Relatório assíncrono
- `basic.js`, `script.js` - Scripts

**Conceitos:** JavaScript assíncrono, manipulação de dados.

---

### 📄 [JSON](./json)

**Trabalho com JSON**

- `formEndereco.html` - Formulário com dados JSON

**Conceitos:** JSON.parse, JSON.stringify, integração com forms.

---

## 🚀 Como Executar

Para visualizar os projetos, abra os arquivos `.html` em um navegador web. Alguns projetos JavaScript requerem um servidor local para funcionar corretamente (devido a módulos ES6):

```bash
# No diretório do projeto
python3 -m http.server 8000
# Acesse http://localhost:8000
```

## 📚 Conceitos Aprendidos

- **HTML5:** Semântica, formulários, tabelas, acessibilidade
- **CSS3:** Seletores, layout (Flexbox/Grid), responsividade, animações
- **JavaScript:** DOM manipulation, eventos, arrays, objetos, módulos
- **Ferramentas:** VS Code, Git, GitHub

## 📝 Licença

Este repositório é para fins educacionais.

Contém exemplos de formulários com estilos e elaboração de campos.

- **DevCon** (`formularios/devcon`)
  - `devcon.html` – Formulário de cadastro de evento
  - `devcon.css` – Estilização do formulário

- **Feedback** (`formularios/feedback`)
  - `feedback.html` – Formulário de feedback
  - `feedback.css` – Estilização do formulário

---

### 📺 [Streaming](./tabelas/streaming)

**Projeto de Linkagem de Conteúdo**

Exemplo simples de layout para exibidor de links de streaming.

**Arquivos:**

- `index.html`

---

### 🚗 [Carros](./tabelas/Carros)

**Projeto de Manipulação de Dados - Tabelas HTML**

Projeto focado em estruturação e apresentação de dados em tabelas.

**Arquivos:**

- `index.html` - Tabela de catálogo de veículos com dados estruturados
- `style.css` - Estilos para formatação e responsividade da tabela

**Conceitos aprendidos:**

- Estrutura de tabelas HTML (`<table>`, `<thead>`, `<tbody>`, `<tfoot>`)
- Atributos de tabelas e células
- Estilização de tabelas
- Responsividade em dados tabulares

**Objetivo principal:** Trabalhar com apresentação eficaz de dados estruturados

---

### 🕒 [Horário](./tabelas/horario)

**Exemplo de tabela simples para horários**

- `horario.html`

---

### 🧑‍🤝‍🧑 [Pessoas](./tabelas/pessoas)

**Exemplo de tabela simples para pessoas**

- `pessoas.html`

---

### 📐 [Responsividade](./responsividade)

**Exercícios de layout responsivo**

- `demo.html` — Demonstração de comportamento responsivo com media queries

---

### 🧩 [Semântica](./semantica)

**Exemplos de HTML semântico**

- `index.html` — Página com elementos estruturais
- `div-soup.html` — Exemplo de ausência de semântica (uso de divs)

---

### ⚖️ [Peso Ideal](./javascript/peso)

**Projeto de Interatividade - JavaScript**

Calculadora de peso ideal com base na altura e sexo informados.

**Arquivos:**

- `peso.html` - Formulário de entrada de dados
- `css/peso.css` - Estilização da calculadora
- `js/peso.js` - Lógica de cálculo em JavaScript

**Conceitos aprendidos:**

- Manipulação do DOM com JavaScript
- Eventos de formulário (`onclick`)
- Funções e variáveis em JavaScript
- Integração entre HTML, CSS e JS

**Objetivo principal:** Introduzir a interatividade nas páginas web com JavaScript

---

### 📁 [Formulários (Slides)](./formularios/slides)

**Exercícios de formulário com CSS**

- `Cadastro.html` — Formulário de cadastro
- `css/style.css` — Estilos dos exemplos
- `html/Formcss.html` — Exemplo de formulário em HTML/CSS

---

## 🎯 Tecnologias Utilizadas

- **HTML5** - Marcação semântica e estrutura de conteúdo
- **CSS3** - Estilização moderna e layouts
- **JavaScript** - Interatividade e manipulação do DOM

---

## 🚀 Como Usar

### Clonar o repositório

```bash
git clone https://github.com/BiancaPedrosa/web.git
cd web
```

### Abrir um projeto

1. Navegue até a pasta do projeto desejado (ex: `listas/Bolo`)
2. Abra o arquivo `index.html` diretamente no navegador
3. Ou use um servidor local para melhor experiência (recomendado)

### Com servidor local (opcional)

Se preferir usar um servidor HTTP:

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (com http-server instalado)
npx http-server
```

Após iniciar, acesse `http://localhost:8000` no navegador.

---

## 📝 Informações Adicionais

### Sobre este Repositório

Este repositório contém exercícios práticos e projetos do curso **Desenvolvimento Web 1** do IFSP. Cada projeto foi desenvolvido para ensinar conceitos específicos de desenvolvimento web front-end.

### Progressão de Aprendizado

Os projetos foram organizados em ordem crescente de complexidade:

1. **Bolo** → Fundações (HTML e CSS básico)
2. **Carros** → Dados estruturados (Tabelas)
3. **Peso Ideal** → Interatividade com JavaScript

## 📞 Suporte

Para dúvidas sobre os projetos, entre em contato com o professor ou consulte a documentação oficial:

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C - HTML Specification](https://www.w3.org/TR/html/)
- [CSS Working Group Drafts](https://drafts.csswg.org/)
