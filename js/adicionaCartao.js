var adicionaCartao = (function () {

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


    var contador = 0;

    return function (conteudo, cor) {
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
})();