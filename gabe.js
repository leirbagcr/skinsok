/*
Imagine que você abriu uma loja:
1) Crie o nome de 8 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/
let skins = ["AWP   | Gungnir", "AWP   | Dragon Lore", "AWP   | Asiimov", "AWP   | Printstream","AK-47 | Gold Arabesque", "AK-47 | Hydroponic", "AK-47 | Fire Serpent","AK-47 | Case Hardened"]
let valores = [ 18475  ,      14000    ,           131.00       ,         398.00,                  4393.39      ,       5762.11   ,         3070   ,              947.94  ]
function mostrarskins(){
    contador = 0
while(contador < skins.length){
    console.log(skins[contador] + "- R$ " + valores[contador])
    contador++
    }
    console.log("---------------------------------")
}
mostrarskins()

function addskins(nome, valor){
    skins.push(nome)
    valores.push(valor)
}
addskins("M4A4  | Howl", 7422)

mostrarskins()

function removeskins(nome){
    skins.splice(nome,1) 
    valores.splice(nome,1)
}
removeskins(2)

mostrarskins()

