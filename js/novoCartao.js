$(".novoCartao").submit(function (event) {

    //impede que a página recarregue
    event.preventDefault();

    //pega o que o usuário digirou
    var campoConteudo = $(".novoCartao-conteudo");

    var conteudo = campoConteudo.val()
        .trim()
        .replace(/\n/g, "<br>");

    adicionaCartao(conteudo);

    campoConteudo.val("");
});