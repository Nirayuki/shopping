const carteiraDoc = document.querySelector(".dinheiro");
const supermercado = document.querySelector(".supermercado");
var carteira = 100000;

var itens = [{
    id: 0,
    nome: "Chocolate",
    url: "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2022/09/06/istock-1313079918-sokmkksb767p.jpg",
    qntd: 50,
    preco: 20
},
{
    id: 1,
    nome: "Leite",
    url: "https://rehagro.com.br/blog/wp-content/uploads/2018/10/qualidade-do-leite.jpg",
    qntd: 20,
    preco: 5
},
{
    id: 2,
    nome: "Game Maker",
    url: "https://coal.gamemaker.io/sites/5d75794b3c84c70006700381/theme/images/og/thumbnail_gm_logo.png?1696004555",
    qntd: 1,
    preco: 1000000
},
{
    id: 3,
    nome: "Unity",
    url: "https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png",
    qntd: 10,
    preco: 666
},
{
    id: 4,
    nome: "Shrek",
    url: "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2021/06/shrek-0.jpg?quality=100&strip=info&w=1024",
    qntd: 5,
    preco: 190190190
},
{
    id: 5,
    nome: "Água",
    url: "https://images.ecycle.com.br/wp-content/uploads/2021/10/07121825/drop-of-water-gee46e2eb0_1920.jpg.webp",
    qntd: 1000,
    preco: 1
},]
var mochila = []

renderCarteira()

renderShop()

function renderShop() {
    supermercado.innerHTML = ""

    itens.forEach(e => {
        const item = document.createElement("div");
        const img = document.createElement("img");
        const titulo = document.createElement("p");
        const preco = document.createElement("p");
        const btn = document.createElement("button");
        const containerPrecoQntd = document.createElement("div");
        const qntdItem = document.createElement("p");

        const maismenos = document.createElement("div");
        const pQntd = document.createElement("p");
        const buttonMenos = document.createElement("button");
        const buttonMais = document.createElement("button");
        let qntd = 1

        img.src = e.url
        img.className = "item-img"

        titulo.innerText = e.nome;
        titulo.className = "titulo"

        preco.innerHTML = `R$ ${e.preco}`
        preco.className = "preco"

        qntdItem.innerHTML = `${e.qntd} unid`
        qntdItem.className = "qntd"

        containerPrecoQntd.className = "precoQntd";
        containerPrecoQntd.append(preco, qntdItem)

        btn.addEventListener("click", (event) => {
            event.preventDefault();

            handleCompra(e, qntd);
        })

        btn.innerText = "Comprar"
        btn.className = "button-compra"

        maismenos.className = "maismenos"
        if(e.qntd > 0){
            pQntd.innerText = qntd;
        }else{
            pQntd.innerText = 0;
        }

        buttonMenos.innerText = "-"
        buttonMais.innerText = "+"

        buttonMais.addEventListener("click", () => {
            if(qntd < e.qntd){
                qntd++;
                renderQntd()
            }
        })

        buttonMenos.addEventListener("click", () => {
            if (qntd > 1) {
                qntd--;
                renderQntd()
            }
        })

        function renderQntd() {
            pQntd.innerText = qntd;
        }

        maismenos.append(buttonMenos, pQntd, buttonMais);

        item.className = "item"
        item.append(img, titulo, containerPrecoQntd, maismenos, btn)

        supermercado.appendChild(item)
    })
}

function handleCompra(item, qntd) {
    carteira = carteira - item.preco * qntd;
    itens[item.id].qntd = itens[item.id].qntd - qntd;
    renderCarteira()
    renderShop()
}

function renderCarteira() {
    carteiraDoc.innerHTML = `R$ ${carteira}`
}

