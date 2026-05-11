import { cardapio } from './dados.js';

const corpoTabela = document.getElementById('corpo-cardapio');
const resumoPedido = document.getElementById('resumo-pedido');
const btnFechar = document.getElementById('btn-fechar');

// 1. Construir cardápio dinamicamente
cardapio.forEach(item => {
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${item.descricao}</td>
        <td>R$${item.preco.toFixed(2)}</td>
        <td><input type="number" min="0" value="0" data-id="${item.id}" class="qtd-input"></td>
    `;
    
    corpoTabela.appendChild(tr);
});

// 2. Lógica para atualizar o pedido
function atualizarPedido() {
    resumoPedido.innerHTML = '';
    let totalGeral = 0;
    const inputs = document.querySelectorAll('.qtd-input');

    inputs.forEach(input => {
        const qtd = parseInt(input.value);
        if (qtd > 0) {
            const item = cardapio.find(p => p.id == input.dataset.id);
            const subtotal = qtd * item.preco;
            totalGeral += subtotal;

            const p = document.createElement('p');
            p.textContent = `${item.descricao} - ${qtd} x R$${item.preco.toFixed(2)}`;
            resumoPedido.appendChild(p);
        }
    });

    if (totalGeral > 0) {
        const totalElem = document.createElement('strong');
        totalElem.textContent = `Total: R$${totalGeral.toFixed(2)}`;
        resumoPedido.appendChild(document.createElement('br'));
        resumoPedido.appendChild(totalElem);
    }
}

// Ouvir mudanças nos inputs
corpoTabela.addEventListener('input', atualizarPedido);

// 3. Fechar pedido
btnFechar.addEventListener('click', () => {
    alert("Pedido encerrado");
    resumoPedido.innerHTML = ''; // Limpa área do pedido [cite: 13]
    document.querySelectorAll('.qtd-input').forEach(i => i.value = 0); // Reseta inputs
});