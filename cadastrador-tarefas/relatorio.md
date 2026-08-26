# Relatório — Cadastrador de Tarefas

## 1. Estrutura HTML

Associar cada `<label>` ao seu campo com `for` é importante porque assim o navegador (e leitores de tela, usados por pessoas com deficiência visual) sabe exatamente a qual campo aquele texto se refere. Isso ajuda na acessibilidade e também na usabilidade: quando eu clico no texto do label, o foco vai direto para o campo, o que facilita bastante em telas de celular.

Para organizar o formulário, separei cada campo dentro de uma `div.campo`, com o label em cima e o input/textarea/select embaixo. Os três campos menores (data, prioridade e horas) coloquei juntos dentro de uma `div.linha-campos`, para ficarem lado a lado no computador e empilhados no celular. Isso deixou o formulário mais fácil de ler, em vez de ter todos os campos soltos um embaixo do outro sem nenhuma divisão.

## 2. Validação no JavaScript

Para verificar a data, usei o construtor `new Date()` tanto na data escolhida pelo usuário quanto na data de hoje, e depois comparei as duas com `<`. O maior cuidado que tive foi com o horário: se eu só comparasse `new Date(dataTexto)` com `new Date()`, a data de hoje viria com hora, minuto e segundo atuais, e isso podia fazer a comparação dar errado (por exemplo, a própria data de hoje sendo considerada "no passado"). Para resolver isso, usei `hoje.setHours(0, 0, 0, 0)` para zerar o horário e comparar só o dia, o mês e o ano.

O maior desafio foi entender que `new Date("2026-08-27")` sozinho já é interpretado como UTC (horário de Greenwich), o que às vezes bagunçava a comparação dependendo do fuso horário do computador. Pesquisei sobre isso e resolvi adicionando `T00:00:00` no final da string da data (`new Date(dataTexto + "T00:00:00")`), o que faz o JavaScript interpretar a data no horário local em vez de UTC.

## 3. Renderização dos cards

Criei uma função chamada `criarCardTarefa(dados)` que recebe um objeto com os dados da tarefa (título, descrição, data, prioridade e horas) e monta um elemento `<div class="tarefa-card">` usando `document.createElement` e `appendChild`. Dentro dela, cada informação (título, descrição, data, badge de prioridade e horas) é criada como um elemento separado e só é adicionada ao card se existir (por exemplo, a descrição e as horas só aparecem se o usuário preencheu). Depois, a função `renderizarTarefas(dados)` chama `criarCardTarefa` e adiciona o card pronto dentro da `div#listaTarefas`.

Gerar o HTML com JavaScript é melhor do que pedir para o usuário recarregar a página porque, se a página recarregasse, todas as tarefas cadastradas antes seriam perdidas (já que não estamos salvando os dados em nenhum banco de dados ou arquivo). Além disso, recarregar a página é mais lento e "trava" a experiência do usuário por um instante, enquanto adicionar o card direto na tela com JavaScript é instantâneo e mantém tudo o que já foi cadastrado visível.

## 4. Tema claro/escuro

No CSS, usei variáveis (`:root { --cor-fundo: ...; --cor-texto: ...; }`) para definir as cores do tema claro. Depois criei uma classe `.tema-escuro`, aplicada no `<body>`, que redefine essas mesmas variáveis com cores escuras. Como o resto do CSS já usa `var(--cor-fundo)`, `var(--cor-texto)`, etc., quando a classe `.tema-escuro` é adicionada ao `body`, todos os elementos mudam de cor automaticamente, sem precisar reescrever regras para cada elemento.

No JavaScript, o botão `#btnTema` tem um `addEventListener("click", ...)` que simplesmente faz `document.body.classList.toggle("tema-escuro")`. O `toggle` é bem prático porque adiciona a classe se ela não existir e remove se já existir, então um único clique alterna entre os dois temas.

## 5. O que aprendi

Aprendi bastante sobre como comparar datas em JavaScript, que era algo que eu nunca tinha feito antes e parecia mais simples do que realmente é (por causa da questão do horário e do fuso). Também aprendi a usar variáveis CSS (`:root` e `var()`), que achei muito interessante porque com poucas linhas dá para trocar o tema inteiro do site.

A parte que achei mais interessante foi montar os cards das tarefas com JavaScript, porque é legal ver a página "ganhando vida" conforme eu cadastro as tarefas, sem precisar recarregar nada. A parte mais difícil foi a validação da data, principalmente entender por que a comparação às vezes dava resultado errado antes de eu zerar as horas com `setHours(0, 0, 0, 0)`.
