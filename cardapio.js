// Vamos criar os elementos do HTML com JavaScript dinamicamente

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

    //Adicionando os elementos na div-mãe
    const divC = document.getElementById('cardapio')

    divItemCardapio.appendChild(h3Titulo, pDescricao, img)
    //divItemCardapio.appendChild(pDescricao)
    //divItemCardapio.appendChild(img)

    divC.appendChild(divItemCardapio)
}

//Executando a função
criarItemCardapio('Bolo de Chocolate', 'Um clássico irresistível com camadas de chocolate', 'https://img.cybercook.com.br/imagens/receitas/969/bolo-de-chocolate-molhadinho-11.jpeg')