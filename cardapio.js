// URL da API
const API_URL = 'https://confeitaria-api-18ek.onrender.com/cardapio';

// Função para criar os elementos do HTML com JavaScript dinamicamente
function criarItemCardapio(titulo, descricao, foto){
    const divItemCardapio = document.createElement('div')
    divItemCardapio.className = 'item-cardapio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = descricao
    pDescricao.className = 'descricao'

    const img = document.createElement('img')
    img.src = foto
    img.className = 'img-item'

    // Adicionando os elementos na div-mãe
    // Certifique-se de que um elemento com id="cardapio" exista no seu HTML
    const divC = document.getElementById('cardapio')

    if (divC) {
        divItemCardapio.appendChild(h3Titulo)
        divItemCardapio.appendChild(pDescricao)
        divItemCardapio.appendChild(img)

        divC.appendChild(divItemCardapio)
    } else {
        console.error("Elemento com id 'cardapio' não encontrado no HTML.");
    }
}

// Novo método para buscar os dados da API e renderizar o cardápio
function carregarCardapio() {
    fetch(API_URL)
        .then(response => {
            // Verifica se a resposta foi bem-sucedida (status 200-299)
            if (!response.ok) {
                throw new Error(`Erro de rede ou API: Status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // 'data' deve ser um array de itens do cardápio
            if (Array.isArray(data)) {
                data.forEach(item => {
                    // Assumindo que cada item tem as propriedades: titulo, descricao e foto
                    // Se a API estiver funcionando, ela deve retornar um objeto com essas chaves
                    criarItemCardapio(item.nome, item.descricao, item.foto);
                });
            } else {
                console.error("Os dados da API não estão no formato de array esperado.", data);
            }
        })
        .catch(error => {
            console.error("Houve um problema ao carregar o cardápio:", error);
            // Opcional: Adicionar uma mensagem de erro ao usuário no HTML
            const divC = document.getElementById('cardapio');
            if (divC) {
                divC.innerHTML = '<p style="color: red;">Não foi possível carregar o cardápio. Tente novamente mais tarde.</p>';
            }
        });
}

// Chama a função para carregar o cardápio quando o script for executado
carregarCardapio();
