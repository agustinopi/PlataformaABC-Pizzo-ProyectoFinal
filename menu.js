$(document).ready(main);

var contador = 1;

function main(){
	$('.navul a').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('.navul ul').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.navul ul').animate({
				left: '-100%'
			});
		}

	});

};