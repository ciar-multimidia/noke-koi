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

// Paginação Letras Noke Koi

$(".filtros-letra>button").on("click", function () {
  var textoBotao = $(this).text();
  if (textoBotao === "TODOS") {
    $(".secaoletra").show();
  } else{
    $(".secaoletra")
    .hide()
    .filter("#"+$(this).text())
    .show();
  }
  $(".filtros-letra>button")
  .removeClass("mostrar")
  .filter(function(index){return $(this).text() === textoBotao;})
  .addClass("mostrar");
});


// Pesquisa Dicionário

var $rows = $('.dicionario tbody tr');
$('#pesquisa').on("input", function() {
  // console.log("busca: "+$('#pesquisa').val());
    if ($.trim($(this).val()) !== "") {
      // console.log("busca nao vazia");
      var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        text,
        nRowsFiltradas = 0;

      $rows.show().filter(function() {
          text = $(this).text().replace(/\s+/g, ' ');
          nRowsFiltradas += reg.test(text);
          return !reg.test(text);
      }).hide();

      // console.log("filtrados: "+nRowsFiltradas);
      if(nRowsFiltradas > 0) {
        jQuery('.sem-resultados').hide();
      } else {
        jQuery('.sem-resultados').show();
      }


      jQuery('#limpar').show();
      jQuery('.esconder-pesquisa').hide();
      jQuery('.proximas-tabelas').addClass('ajuste-margin');
      jQuery('.secaoletra').show();
    } 
    
    else{
      // console.log("busca VAZIA");
      jQuery('.esconder-pesquisa').show();
      jQuery('.proximas-tabelas').removeClass('ajuste-margin');
      jQuery('#limpar').hide();
      jQuery('.secaoletra').hide();      
      jQuery('.sem-resultados').hide();
      $rows.show();
      $(".filtros-letra>button:first-child").eq(0).trigger("click");

    }
})
.on("search", function(event){
  $(this).trigger("input");
});



$('#limpar').click(function() {
  $('#pesquisa').val("").trigger("input");
  // $(".filtros-letra>button:first-child").eq(0).trigger("click");
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

