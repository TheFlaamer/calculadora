const tela = document.querySelector("#tela");
const botaoNumbero = document.querySelectorAll(".btnNumber");
const btnDelete = document.querySelector("#btnApagar");
const btnOpcao = document.querySelectorAll(".btnOpcao");
const btnElevado = document.querySelector("#btnElevado");
const btnZerar = document.querySelector("#btnZerar");
const igual = document.querySelector("#btnPesquisa");
const btnPorc = document.querySelector("#btnPorc")
let parteUm = 0;
let operacao = 0;

botaoNumbero.forEach((el, i) => {
    el.addEventListener("click", () => {
        tela.value += el.value;
    })
})
btnDelete.addEventListener("click", () => {
    const conteudo = tela.value.split("");
    conteudo.splice(conteudo.length - 1, 1);
    tela.value = conteudo.join('');
})
btnOpcao.forEach((el, i) => {
    el.addEventListener("click", () => {
        switch (el.id) {
            case "btnMais":
                tela.value += "+";
                operacao = 0;
                break;
            case "btnMenos":
                tela.value += "-";
                operacao = 1;
                break;
            case "btnMultiplica":
                tela.value += "*";
                operacao = 2;
                break;
            case "btnDivide":
                tela.value += "/";
                operacao = 3;
                break;
        }
    })
})
let resultado = 0;
let splitado = 0;
let numConvertido = 0;
igual.addEventListener("click", () => {
    switch (operacao) {
        case 0:
            splitado = tela.value.split("+");
            numConvertido = converterPNumero(splitado);
            resultado = numConvertido.reduce((ac, a) => { return ac + a });
            break;
        case 1:
            splitado = tela.value.split("-");
            numConvertido = converterPNumero(splitado);
            resultado = numConvertido.reduce((ac, a) => { return ac - a });
            break;
        case 2:
            splitado = tela.value.split("*");
            numConvertido = converterPNumero(splitado);
            resultado = numConvertido.reduce((ac, a) => { return ac * a });
            break;
        case 3:
            splitado = tela.value.split("/");
            numConvertido = converterPNumero(splitado);
            resultado = numConvertido.reduce((ac, a) => { return ac / a });
            break;
    }
    tela.value = Number(resultado);
})
function converterPNumero(array) {
    let newArr = [];
    array.forEach((el, i) => {
        newArr.push(Number(el));
    })
    return newArr;
}
btnZerar.addEventListener("click", () => {
    tela.value = "";
})
btnElevado.addEventListener("click", () => {
    const telaValor = Number(tela.value);
    tela.value = telaValor * telaValor;
})
btnPorc.addEventListener("click", () => {
    alert("Ainda não ta funcionando!")
})