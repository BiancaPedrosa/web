//Demo de como criar um relatório básico usando JavaScript. O código abaixo define um conjunto de dados fictícios e uma função para criar uma tabela a partir desses dados, exibindo apenas as colunas especificadas.  
const mockData = [
          { "id": 1, "nome": "Ana Silva", "cidade": "Campinas", "venda": "R$ 1.200,00" },
          { "id": 2, "nome": "João Souza", "cidade": "Salto", "venda": "R$ 850,00" },
          { "id": 3, "nome": "Marta Lima", "cidade": "Bragança", "venda": "R$ 2.100,00" },
          { "id": 4, "nome": "Lucas Ferreira", "cidade": "Campinas", "venda": "R$ 3.400,00" }
];


const colunas = ["nome", "venda"];

function criarTabela(dados, colunas) {
     let linha = " ";    
     dados.forEach(item => {
               colunas.forEach(coluna => {
                         linha += item[coluna] + " ";
               });
          });
     console.log(linha + "\n");
     linha="";
}
criarTabela(mockData, colunas);
