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
  } else {
    jQuery('.sem-resultados').show();
  }
});

$('#pesquisa').keyup(function() {
    if (jQuery(this).length >  1) {

  } else {
    jQuery('#limpar').show();
    jQuery('.esconder-pesquisa').hide();
    jQuery('.proximas-tabelas').addClass('ajuste-margin');
    jQuery('.secaoletra').show();
  }
});

$('#limpar').click(function() {
  jQuery('.esconder-pesquisa').show();
  jQuery('.proximas-tabelas').removeClass('ajuste-margin');
  jQuery('#limpar').hide();
  jQuery('.secaoletra').hide();
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
        $(".voltartopo>button").show();
        console.log("deu não");
    }
    else if (offset < tableOffset) {
        $divfixedHeader.hide();
        $(".voltartopo>button").hide();
    }
});

// Voltar ao topo

$(".voltartopo>button, .secaoletra .filtros-letra button").click(function (){
    $('html, body').animate({
        scrollTop: 0
    }, 500);
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

// Paginação Letras Noke Koi

$(".nk>button:first-child").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#A" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:first-child").addClass("mostrar");
});

$(".nk>button:nth-child(2)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#E" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(2)").addClass("mostrar");
});

$(".nk>button:nth-child(3)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#H" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(3)").addClass("mostrar");
});

$(".nk>button:nth-child(4)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#I" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(4)").addClass("mostrar");
});

$(".nk>button:nth-child(5)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#K" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(5)").addClass("mostrar");
});

$(".nk>button:nth-child(6)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#M" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(6)").addClass("mostrar");
});

$(".nk>button:nth-child(7)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#N" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(7)").addClass("mostrar");
});

$(".nk>button:nth-child(8)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#O" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(8)").addClass("mostrar");
});

$(".nk>button:nth-child(9)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#P" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(9)").addClass("mostrar");
});

$(".nk>button:nth-child(10)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#R" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(10)").addClass("mostrar");
});

$(".nk>button:nth-child(11)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#S" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(11)").addClass("mostrar");
});

$(".nk>button:nth-child(12)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#SH" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(12)").addClass("mostrar");
});

$(".nk>button:nth-child(13)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#T" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(13)").addClass("mostrar");
});

$(".nk>button:nth-child(14)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#TS" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(14)").addClass("mostrar");
});

$(".nk>button:nth-child(15)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#TX" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(15)").addClass("mostrar");
});

$(".nk>button:nth-child(16)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#V" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(16)").addClass("mostrar");
});

$(".nk>button:nth-child(17)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#W" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(17)").addClass("mostrar");
});

$(".nk>button:nth-child(18)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#X" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(18)").addClass("mostrar");
});

$(".nk>button:nth-child(19)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#Y" ).show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(19)").addClass("mostrar");
});

$(".nk>button:nth-child(20)").click(function(e) {
  $(".secaoletra").show();
  $(".nk button").removeClass("mostrar");
  $(".nk>button:nth-child(20)").addClass("mostrar");
});


// Paginação Letras Português

$(".pt>button:first-child").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#APT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:first-child").addClass("mostrar");
});

$(".pt>button:nth-child(2)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#BPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(2)").addClass("mostrar");
});

$(".pt>button:nth-child(3)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#CPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(3)").addClass("mostrar");
});

$(".pt>button:nth-child(4)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#DPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(4)").addClass("mostrar");
});

$(".pt>button:nth-child(5)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#EPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(5)").addClass("mostrar");
});

$(".pt>button:nth-child(6)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#FPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(6)").addClass("mostrar");
});

$(".pt>button:nth-child(7)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#GPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(7)").addClass("mostrar");
});

$(".pt>button:nth-child(8)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#HPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(8)").addClass("mostrar");
});

$(".pt>button:nth-child(9)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#IPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(9)").addClass("mostrar");
});

$(".pt>button:nth-child(10)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#JPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(10)").addClass("mostrar");
});

$(".pt>button:nth-child(11)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#LPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(11)").addClass("mostrar");
});

$(".pt>button:nth-child(12)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#MPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(12)").addClass("mostrar");
});

$(".pt>button:nth-child(13)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#NPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(13)").addClass("mostrar");
});

$(".pt>button:nth-child(14)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#OPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(14)").addClass("mostrar");
});

$(".pt>button:nth-child(15)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#PPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(15)").addClass("mostrar");
});

$(".pt>button:nth-child(16)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#QPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(16)").addClass("mostrar");
});

$(".pt>button:nth-child(17)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#RPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(17)").addClass("mostrar");
});

$(".pt>button:nth-child(18)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#SPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(18)").addClass("mostrar");
});

$(".pt>button:nth-child(19)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#TPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(19)").addClass("mostrar");
});

$(".pt>button:nth-child(20)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#UPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(20)").addClass("mostrar");
});

$(".pt>button:nth-child(21)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#VPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(21)").addClass("mostrar");
});

$(".pt>button:nth-child(22)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#XPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(22)").addClass("mostrar");
});

$(".pt>button:nth-child(23)").click(function(e) {
  $(".secaoletra").hide();
  $(".secaoletra").filter( "#ZPT" ).show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(23)").addClass("mostrar");
});

$(".pt>button:nth-child(24)").click(function(e) {
  $(".secaoletra").show();
  $(".pt button").removeClass("mostrar");
  $(".pt>button:nth-child(24)").addClass("mostrar");
});