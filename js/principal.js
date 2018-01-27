function mudaLayout() {
    document.querySelector(".mural").classList.toggle("mural--linhas");
}

document.querySelector("#mudaLayout").addEventListener("click", function () {

    var mural = document.querySelector(".mural");

    mural.classList.toggle("mural--linhas");

    if (mural.classList.contains("mural--linhas")) {
        this.textContent = "Blocos";
    } else {
        this.textContent = "Linhas";
    }
});

function removeCartao() {
    var cartao = document.querySelector("#cartao_" + this.dataset.ref);

    cartao.classList.add("cartao--some");
    setTimeout(function () {
        cartao.remove();
    }, 400);
}

var botoes = document.querySelectorAll(".opcoesDoCartao-remove");

for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", removeCartao);
}

var contador = $(".cartao").length;

$(".novoCartao").submit(function (event) {

    //impede que a página recarregue
    event.preventDefault();

    //pega o que o usuário digirou
    var campoConteudo = $(".novoCartao-conteudo");

    var conteudo = campoConteudo.val().trim();

    //cria os elementos do cartão e adiciona no DOM
    if (conteudo) {

        //soma um no contador
        contador++;

        //cria o botão de remover e adiciona o atributo data-ref
        var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
            .attr("data-ref", contador)
            .text("Remover")
            .click(removeCartao);

        //cria a div de opções
        var opcoes = $("<div>").addClass("opcoesDoCartao").append(botaoRemove);

        var conteudoTag = $("<p>").addClass("cartao-conteudo")
            .append(conteudo);

        //cria atributo id no cartão
        $("<div>").attr("id", "cartao_" + contador)
            .addClass("cartao")
            .append(opcoes)
            .append(conteudoTag)
            .prependTo(".mural");
    }

    //apaga o contéudo do textarea
    campoConteudo.val("");
});