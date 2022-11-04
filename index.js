const sectionPaintig = document.querySelector(".sectionPaintig")
const sectionAction = document.querySelector(".sectionAction")


function productsPaintig(lista){

    let ul = document.createElement("ul");
    for(let i = 0; i < lista.length; i++){
        
        let item = lista[i];
        if(item.type == "painting"){
            let templeteMontado = criarTemplete(item);
            ul.appendChild(templeteMontado);
        };
    };
    sectionPaintig.appendChild(ul);
};
productsPaintig(itens);


function productsAction(lista){

    let ul = document.createElement("ul");
    for(let i = 0; i < lista.length; i++){
        
        let item = lista[i];
        if(item.type == "Action"){
            let templeteMontado = criarTemplete(item);
            ul.appendChild(templeteMontado);
        };
    };
    sectionAction.appendChild(ul);
};
productsAction(itens);

function criarTemplete(item){

    let name = item.name
    let image = item.image
    let price = item.price
    let type = item.type

    let tagLi = document.createElement("li")
    let tagImg = document.createElement("img")
    let tagH2 = document.createElement("h2")
    let tagP = document.createElement("p")

    tagLi.innerHTML = `<img src="/assets/img/${image}" alt="${name}" class="imagem">
    <h2 class="titleH2">${name}</h2>
    <p class="paragrafo"><strong>Valor R$</strong>${price}</p>`

    return tagLi
}