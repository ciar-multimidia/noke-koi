// Abrir e fechar menu

$('#abrir-menu').click(function(){
	$('#menu-aberto').addClass("ativa").attr("aria-expanded","true");
    $('.menus , #menu-aberto .botoes a , #fechar-menu').attr("tabindex", "0");
});

$('#fechar-menu').click(function(){
	$('#menu-aberto').removeClass("ativa").attr("aria-expanded","false");
  $('.menus , #menu-aberto .botoes a , #fechar-menu').attr("tabindex", "-1");
});

$(".itens-menu>ul>.fechar-menu").click(function(e) {
        if( $(this).hasClass("mostrar-menu") ) {
            $(this).removeClass("mostrar-menu").addClass("fechar-menu");
        } else {
            $(this).siblings().removeClass("mostrar-menu").addClass("fechar-menu"); 
            $(this).removeClass("fechar-menu").addClass("mostrar-menu");
        }
});

// Sub Menus Expansivos

$('.expandir').click(function(){
  $('.sub-menu').attr("aria-expanded","true");
});

// Barra progresso

window.onscroll = function() {barraprogresso()};

function barraprogresso() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("padrao").style.width = scrolled + "%";
}


// Pesquisa Dicionário

var $rows = $('.dicionario tbody tr');
$('#pesquisa').keyup(function() {
    var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        text;

    $rows.show().filter(function() {
        text = $(this).text().replace(/\s+/g, ' ');
        return !reg.test(text);
    }).hide();
});

$('#pesquisa').keyup(function() {
    if(jQuery(".dicionario tr:visible").length > 1) {
    jQuery('.sem-resultados').hide();
    console.log("teste1");
  } else {
    jQuery('.sem-resultados').show();
    console.log("teste2");
  }
});

$('#pesquisa').keyup(function() {
    if (jQuery(this).length >  1) {

  } else {
    jQuery('#limpar').show();
    jQuery('.esconder-pesquisa').hide();
    jQuery('.proximas-tabelas').addClass('ajuste-margin');
  }
});

$('#limpar').click(function() {
  jQuery('.esconder-pesquisa').show();
  jQuery('.proximas-tabelas').removeClass('ajuste-margin');
  jQuery('#limpar').hide();
  console.log("voltou");
});



// Fixar topo dicionário

var tableOffset = $(".primeira-tabela").offset().top;
var $header = $(".primeira-tabela > thead").clone();
var $fixedHeader = $("#topodicionario").append($header);
var $divfixedHeader = $(".fixartopo");

$(window).bind("scroll", function() {
    var offset = $(this).scrollTop();
    
    if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
        $divfixedHeader.show();
    }
    else if (offset < tableOffset) {
        $divfixedHeader.hide();
    }
});


// Smothscrool

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});