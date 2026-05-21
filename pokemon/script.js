const btnBuscar = document.getElementById('btn-buscar');
const inputBusca = document.getElementById('input-busca');
const containerResultado = document.getElementById('container-resultado');

btnBuscar.addEventListener('click', async () => {
    // 1. Validação de input vazio e limpeza de espaços
    const termoBusca = inputBusca.value.trim().toLowerCase();

    if (termoBusca === "") {
        alert("Por favor, digite o nome de um Pokémon.");
        return;
    }

    try {
        // 2. Feedback visual de carregamento
        btnBuscar.disabled = true;
        btnBuscar.innerText = "Buscando...";
        containerResultado.innerHTML = `<p class="msg-info">Buscando dados do Pokémon...</p>`;

        // 3. Consumo da API aberta (Sem chaves necessárias)
        const url = `https://pokeapi.co/api/v2/pokemon/${termoBusca}`;
        const response = await fetch(url);
        
        // Se der erro 404 (não encontrado) ou outro erro HTTP, pula para o catch
        if (!response.ok) throw new Error("Pokémon não encontrado");

        const data = await response.json();

        // 4. Mapeamento e extração de dados (Resolvendo o Desafio Extra de listar todos os tipos)
        const listaTipos = data.types.map(item => {
            return `<span class="badge">${item.type.name}</span>`;
        }).join('');

        // 5. Renderização do Card de Sucesso no DOM
        containerResultado.innerHTML = `
            <article class="poke-card">
                <img src="${data.sprites.front_default}" alt="Foto do ${data.name}">
                <h2>${data.name}</h2>
                <p class="poke-id">Nº ${data.id}</p>
                <div class="badge-container">
                    ${listaTipos}
                </div>
            </article>
        `;

    } catch (error) {
        // 6. Tratamento de Erros (Tanto erro 404 quanto falha física de internet caem aqui)
        containerResultado.innerHTML = `<p class="msg-info erro">Pokémon não encontrado! Verifique a grafia em inglês.</p>`;
    } finally {
        // Restaurar estado do botão
        btnBuscar.disabled = false;
        btnBuscar.innerText = "Buscar";
    }
});