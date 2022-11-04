let sectionPaintig = document.querySelector(".sectionPaintig")
let sectionAction  = document.querySelector(".sectionAction")


function pruductsPainting(lista, referenciaHtml) {

    for (let i = 0; i < lista.length; i++) {

        let products        = lista[i];
        let templeteMontado = criarTemplete(products);

        referenciaHtml.appendChild(templeteMontado);
    };
};
pruductsPainting(itens, sectionPaintig);


function pruductsAction(lista, referenciaHtml) {

    for (let i = 0; i < lista.length; i++) {

        let products        = lista[i];
        let templeteMontado = criarTemplete(products);

        referenciaHtml.appendChild(templeteMontado);
    };
};
pruductsAction(itens, sectionAction);


function criarTemplete(products) {

    let imagem = products.image;
    let nome   = products.name;
    let preco  = products.price;
    let type   = products.type;

    let tagSpan = document.createElement("span");

    tagSpan.innerHTML = `<img src="./assets/img/${imagem}" alt="${nome}" class="imagens">
    <h2 class="titleH2">${nome}</h2>
    <p class="paragrafos">${preco}</p>`

    sectionPaintig.appendChild(tagSpan)
    sectionAction.appendChild(tagSpan)

    return tagSpan
}



























/* const section1 = document.querySelector(".section1");

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
    tagP, innerHTML = `<strong>valor R$</strong> ${preco}`;

    tagSpan.append(tagImg, tagH2, tagP)

    return tagSpan
} */