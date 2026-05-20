const btnConverter = document.getElementById('btn-converter');
const inputValor = document.getElementById('valor');
const selectMoeda = document.getElementById('moeda');
const divResultado = document.getElementById('resultado');
const divErro = document.getElementById('erro');

const txtValorConvertido = document.getElementById('valor-convertido');
const txtCotacaoBase = document.getElementById('cotacao-base');
const txtVariacao = document.getElementById('variacao');

btnConverter.addEventListener('click', async () => {
    const valor = parseFloat(inputValor.value);
    const moeda = selectMoeda.value;

    // 1. Validação básica
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido maior que zero.");
        return;
    }

    try {
        // 2. Feedback visual de carregamento
        btnConverter.disabled = true;
        btnConverter.innerText = "Consultando...";
        divErro.classList.add('hidden');
        divResultado.classList.add('hidden');

        // 3. Consumo da API (AwesomeAPI)
        const url = `https://economia.awesomeapi.com.br/last/${moeda}-BRL`;
        const response = await fetch(url);
        
        if (!response.ok) throw new Error();

        const data =  await response.json();
        
        // 4. Manipulação de chave dinâmica (ex: data.USDBRL)
        const info = data[`${moeda}BRL`];
        const cotacao = parseFloat(info.bid);
        const variacao = parseFloat(info.pctChange);
        
        // 5. Cálculos e Formatação
        const totalConvertido = valor * cotacao;

        txtValorConvertido.innerText = totalConvertido.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        txtCotacaoBase.innerText = `1 ${moeda} = R$ ${cotacao.toFixed(2)}`;
        
        // 6. Lógica de cores para variação (UX)
        txtVariacao.innerText = `Variação: ${variacao}%`;
        txtVariacao.className = variacao >= 0 ? 'alta' : 'baixa';

        // Exibir resultado
        divResultado.classList.remove('hidden');

    } catch (error) {
        // 7. Tratamento de Erros
        divErro.classList.remove('hidden');
    } finally {
        // Restaurar estado do botão
        btnConverter.disabled = false;
        btnConverter.innerText = "Converter para R$";
    }
});