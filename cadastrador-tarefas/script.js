// =========================================================
// CADASTRADOR DE TAREFAS - script.js
// Projeto 2º Trimestre - Desenvolvimento Web Estático
// =========================================================

// Pego os elementos principais do HTML para poder usar depois
const formTarefa = document.getElementById("formTarefa");
const inputTitulo = document.getElementById("inputTitulo");
const inputDescricao = document.getElementById("inputDescricao");
const inputData = document.getElementById("inputData");
const selectPrioridade = document.getElementById("selectPrioridade");
const inputHoras = document.getElementById("inputHoras");
const mensagemForm = document.getElementById("mensagemForm");
const listaTarefas = document.getElementById("listaTarefas");
const btnTema = document.getElementById("btnTema");

// Contador só para dar um id simples a cada card (não precisa ser sofisticado)
let contadorTarefas = 0;

// ---------------------------------------------------------
// FUNÇÃO: mostrarMensagem
// Mostra uma mensagem de erro (vermelha) ou sucesso (verde)
// dentro da div #mensagemForm
// ---------------------------------------------------------
function mostrarMensagem(texto, tipo) {
  mensagemForm.textContent = texto;

  // Removo as classes antigas antes de colocar a nova
  mensagemForm.classList.remove("mensagem-erro", "mensagem-sucesso");

  if (tipo === "erro") {
    mensagemForm.classList.add("mensagem-erro");
  } else {
    mensagemForm.classList.add("mensagem-sucesso");
  }
}

// ---------------------------------------------------------
// FUNÇÃO: validarFormulario
// Confere todos os campos e devolve um objeto dizendo se
// deu tudo certo (valido: true/false) e qual foi o erro
// ---------------------------------------------------------
function validarFormulario() {
  const titulo = inputTitulo.value.trim();
  const descricao = inputDescricao.value.trim();
  const dataTexto = inputData.value;
  const prioridade = selectPrioridade.value;
  const horasTexto = inputHoras.value;

  // 1) Título é obrigatório
  if (titulo === "") {
    return { valido: false, erro: "O título é obrigatório." };
  }

  // 2) Título não pode passar de 80 caracteres
  if (titulo.length > 80) {
    return { valido: false, erro: "O título deve ter no máximo 80 caracteres." };
  }

  // 3) Descrição (se preenchida) não pode passar de 500 caracteres
  if (descricao.length > 500) {
    return { valido: false, erro: "A descrição deve ter no máximo 500 caracteres." };
  }

  // 4) Data é obrigatória
  if (dataTexto === "") {
    return { valido: false, erro: "A data de vencimento é obrigatória." };
  }

  // 5) Data não pode ser anterior a hoje
  //    Para comparar só o "dia", eu zero as horas dos dois lados
  const dataEscolhida = new Date(dataTexto + "T00:00:00");
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  if (dataEscolhida < hoje) {
    return { valido: false, erro: "A data não pode ser anterior ao dia de hoje." };
  }

  // 6) Prioridade é obrigatória
  if (prioridade === "") {
    return { valido: false, erro: "Selecione uma prioridade." };
  }

  // 7) Horas (se preenchido) precisa ser >= 0.5
  if (horasTexto !== "" && Number(horasTexto) < 0.5) {
    return { valido: false, erro: "A estimativa de horas deve ser de pelo menos 0.5." };
  }

  // Se passou por tudo isso, o formulário está válido
  return {
    valido: true,
    dados: {
      titulo: titulo,
      descricao: descricao,
      data: dataTexto,
      prioridade: prioridade,
      horas: horasTexto
    }
  };
}

// ---------------------------------------------------------
// FUNÇÃO: formatarDataBR
// Transforma "2026-08-27" em "27/08/2026" para ficar
// mais fácil de ler no card
// ---------------------------------------------------------
function formatarDataBR(dataISO) {
  const partes = dataISO.split("-"); // ["2026", "08", "27"]
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

// ---------------------------------------------------------
// FUNÇÃO: criarCardTarefa
// Recebe os dados da tarefa e devolve um elemento HTML
// (div) já pronto para ser inserido na lista
// ---------------------------------------------------------
function criarCardTarefa(dados) {
  contadorTarefas++;

  const card = document.createElement("div");
  card.classList.add("tarefa-card");
  card.id = "tarefa-" + contadorTarefas;

  // Título
  const titulo = document.createElement("h3");
  titulo.textContent = dados.titulo;
  card.appendChild(titulo);

  // Descrição (só aparece se o usuário preencheu)
  if (dados.descricao !== "") {
    const descricao = document.createElement("p");
    descricao.textContent = dados.descricao;
    card.appendChild(descricao);
  }

  // Data de vencimento
  const data = document.createElement("p");
  data.textContent = "📅 Vencimento: " + formatarDataBR(dados.data);
  card.appendChild(data);

  // Linha final: badge de prioridade + horas
  const rodapeCard = document.createElement("div");
  rodapeCard.classList.add("rodape-card");

  const badge = document.createElement("span");
  badge.classList.add("badge-prioridade", "badge-" + dados.prioridade);
  badge.textContent = dados.prioridade;
  rodapeCard.appendChild(badge);

  if (dados.horas !== "") {
    const horas = document.createElement("span");
    horas.textContent = "⏱ " + dados.horas + "h estimadas";
    rodapeCard.appendChild(horas);
  }

  card.appendChild(rodapeCard);

  return card;
}

// ---------------------------------------------------------
// FUNÇÃO: renderizarTarefas
// Adiciona o novo card na div #listaTarefas, sem apagar
// as tarefas que já estavam lá (lista acumulativa)
// ---------------------------------------------------------
function renderizarTarefas(dados) {
  // Na primeira tarefa, tiro o texto de "lista vazia"
  const vazio = listaTarefas.querySelector(".lista-vazia");
  if (vazio) {
    vazio.remove();
  }

  const novoCard = criarCardTarefa(dados);
  listaTarefas.appendChild(novoCard);
}

// ---------------------------------------------------------
// EVENTO: envio do formulário
// ---------------------------------------------------------
formTarefa.addEventListener("submit", function (event) {
  event.preventDefault(); // impede o recarregamento da página

  const resultado = validarFormulario();

  if (!resultado.valido) {
    mostrarMensagem("❌ " + resultado.erro, "erro");
    return;
  }

  // Se chegou aqui, está tudo certo
  renderizarTarefas(resultado.dados);
  mostrarMensagem("✅ Tarefa cadastrada!", "sucesso");
  formTarefa.reset();
});

// ---------------------------------------------------------
// EVENTO: alternar tema claro/escuro
// ---------------------------------------------------------
btnTema.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");
});
