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

    var conteudo = campoConteudo.val()
        .trim()
        .replace(/\n/g, "<br>");

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
        var opcoes = $("<div>").addClass("opcoesDoCartao")
            .append(botaoRemove);

            //chamada para nova função
        var tipoCartao = decideTipoCartao(conteudo);

        var conteudoTag = $("<p>").addClass("cartao-conteudo")
            .append(conteudo);

        //cria atributo id no cartão
        $("<div>").attr("id", "cartao_" + contador)
            .addClass("cartao")
            .addClass(tipoCartao)
            .append(opcoes)
            .append(conteudoTag)
            .prependTo(".mural");
    }

    //apaga o contéudo do textarea
    campoConteudo.val("");
});

function decideTipoCartao(conteudo) {
    var quebras = conteudo.split("<br>").length;

    var totalDeLetras = conteudo.replace(/<br>/g, " ").length;

    var ultimoMaior = "";
    conteudo.replace(/<br>/g, " ")
        .split(" ")
        .forEach(function (palavra) {
            if (palavra.length > ultimoMaior.length) {
                ultimoMaior = palavra;
            }
        });

    var tamMaior = ultimoMaior.length;

    //no mínimo, todo cartão tem o texto pequeno
    var tipoCartao = "cartao--textoPequeno";

    if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55) {
        tipoCartao = "cartao--textoGrande";
    } else if (tamMaior < 12 && quebras < 6 && totalDeLetras < 75) {
        tipoCartao = "cartao--textoMedio";
    }

    return tipoCartao;
}