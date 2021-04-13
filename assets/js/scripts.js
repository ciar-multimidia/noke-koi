// Abrir e fechar menu

$('#abrir-menu').click(function(){
	$('#menu-aberto').addClass("ativa");
});

$('#fechar-menu').click(function(){
	$('#menu-aberto').removeClass("ativa");
});

$(".itens-menu>ul>.fechar-menu").click(function(e) {
        if( $(this).hasClass("mostrar-menu") ) {
            $(this).removeClass("mostrar-menu").addClass("fechar-menu");
        } else {
            $(this).siblings().removeClass("mostrar-menu").addClass("fechar-menu"); 
            $(this).removeClass("fechar-menu").addClass("mostrar-menu");
        }
});

// Barra progresso

window.onscroll = function() {barraprogresso()};

function barraprogresso() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("padrao").style.width = scrolled + "%";
}