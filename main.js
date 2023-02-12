$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#button-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novoEndereco = $("#endereco-imagem-nova").val();
        const novoItem = $('<li style="display: none"></li>');
        $(` <img src="${novoEndereco}" />`).appendTo(novoItem);
        $(`<div class="overlay-link">
        <a href="${novoEndereco}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
        </div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#endereco-imagem-nova').val("");
    })
})
