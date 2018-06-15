$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu-bar').click(function(){
		if (contador == 1) {
			$('.con-menu').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.con-menu').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}





////////////////////////////////
swal({
	type:'warning',
	title:'EL SITIO WEB ESTÁ EN CONSTRUCCIÓN',
	text:'Lamentamos las molestias. Para mayor informacion contactenos.',
	timer:6000,
  });