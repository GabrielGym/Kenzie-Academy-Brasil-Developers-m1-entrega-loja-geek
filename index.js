const sectionPaintig = document.querySelector(".sectionPaintig")
const sectionAction  = document.querySelector(".sectionAction")


function productsPaintig(lista) {

    let ul = document.createElement("ul");
    for (let i = 0; i < lista.length; i++) {

        let item = lista[i];
        if (item.type == "painting") {
            let templeteMontado = criarTemplete(item);
            ul.appendChild(templeteMontado);
        };
    };
    sectionPaintig.appendChild(ul);
};
productsPaintig(itens);


function productsAction(lista) {

    let ul = document.createElement("ul");
    for (let i = 0; i < lista.length; i++) {

        let item = lista[i];
        if (item.type == "Action") {
            let templeteMontado = criarTemplete(item);
            ul.appendChild(templeteMontado);
        };
    };
    sectionAction.appendChild(ul);
};
productsAction(itens);

function criarTemplete(item) {

    let name  = item.name
    let image = item.image
    let price = item.price
    let type  = item.type

    let tagLi  = document.createElement("li")
    let tagImg = document.createElement("img")
    let tagH2  = document.createElement("h2")
    let tagP   = document.createElement("p")

    tagImg.src = `./assets/img/${image}`
    tagImg.alt = `${name}`
    tagH2.innerText = `${name}`
    tagP.innerHTML  = `<strong>valor R$</strong> ${price}`

    tagLi.append(tagImg, tagH2, tagP)

    return tagLi
}

