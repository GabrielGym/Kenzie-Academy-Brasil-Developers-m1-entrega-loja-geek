const section1 = document.querySelector(".section1");

function pruductsPainting(lista, referenciaHtml) {

    for (let i = 0; i < lista.length; i++) {

        let itens = lista[i];
        let templeteMontado = criarTemplete(itens);

        referenciaHtml.appendChild(templeteMontado);
    };
};
pruductsPainting(listaDeProdutosPainting, section1);


const section2 = document.querySelector(".section2");

function pruductsActions(lista, referenciaHtml) {

    for (let i = 0; i < lista.length; i++) {

        let itens = lista[i];
        let templeteMontado = criarTemplete(itens);

        referenciaHtml.appendChild(templeteMontado);
    };
};
pruductsActions(listaDeProdutosActions, section2)


function criarTemplete(itens) {

    let imagem = itens.image;
    let nome = itens.name;
    let preco = itens.price;
    let type = itens.type;

    let tagSpan = document.createElement("span");
    let tagImg = document.createElement("img");
    let tagH2 = document.createElement("h2");
    let tagP = document.createElement("p");

    tagImg.src = `./assets/img/${imagem}`;
    tagImg.alt = nome
    tagH2.innerText = nome
    tagP, innerHTML = `<strong>valor R$</strong> ${preco00}`;

    tagSpan.append(tagImg, tagH2, tagP)

    return tagSpan
}