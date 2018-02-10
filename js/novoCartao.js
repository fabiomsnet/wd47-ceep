(function (controlador) {
    "use strict"

    $(".novoCartao").submit(function (event) {

        //pega o que o usuário digirou
        var campoConteudo = $(".novoCartao-conteudo");

        var conteudo = campoConteudo.val()
            .trim()
            .replace(/\n/g, "<br>");

        if (conteudo) {
            controlador.adicionaCartao(conteudo);
            $(document).trigger("precisaSincronizar");
        }

        campoConteudo.val("");
        //impede que a página recarregue
        event.preventDefault();
    });

})(controladorDeCartoes);