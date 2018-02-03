$("#ajuda").click(function () {
    $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",
        function (res) {
            console.log(res);
            res.instrucoes.forEach(function (instrucoes) {
                controladorDeCartoes.adicionaCartao(instrucoes.conteudo, instrucoes.cor);
            });
        }
    );
});