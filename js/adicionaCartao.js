var contador = $(".cartao").length;

function adicionaCartao(conteudo, cor) {
    contador++;

    var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
        .attr("data-ref", contador)
        .text("Remover")
        .click(removeCartao);

    var opcoes = $("<div>").addClass("opcoesDoCartao")
        .append(botaoRemove);

    var tipoCartao = decideTipoCartao(conteudo);

    var conteudoTag = $("<p>").addClass("cartao-conteudo")
        .append(conteudo);

    $("<div>").attr("id", "cartao_" + contador)
        .addClass("cartao")
        .addClass(tipoCartao)
        .append(opcoes)
        .append(conteudoTag)
        .css("background-color", cor)
        .prependTo(".mural");
}
