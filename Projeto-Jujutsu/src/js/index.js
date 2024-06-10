const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
const btnvoltar =document.getElementById("btn-voltar");


btnAvancar.addEventListener("click", function(){
    if (cartaoAtual === cartoes.length -1) return;

    esconderCartoesSelecionados();


    cartaoAtual++;
    mostrarCartao();

});

btnvoltar.addEventListener("click", function(){
    if(cartaoAtual === 0) return;

    esconderCartoesSelecionados();


    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoesSelecionados() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function esconderCartoesSelecionados() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
