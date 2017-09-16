$(document).ready(function(){

	var accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJhZG1pbiIsInJvbGVzIjoiW1wiYWRtaW5cIixcInJlY2VwY2lvblwiXSIsImlhdCI6MTUwMTQ0Mjg1NX0.RMi14h-gDn756tsBfEz1NT6ntNZBOXtWa2dztmjmYfM';
	
	var idPulsera = $("h1").text();


	console.log("voy a buscar");
	initAnimation();
	var nombre = "FABIAN";
	$(".nombre").append(" "+nombre);

	var animationFinished = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	setTimeout(function(){ animarYsaludar(); }, 7000);


	
	


	/*azul : 023f86
	amarillo : f7a600*/

	/*jQuery.ajax ({
	     url: "https://boca-backend.herokuapp.com/visitantes/"+idPulsera,
	    headers:{'x-access-token' : accessToken},
	    type: "GET",
	    contentType: "multipart/form-data",
	    success: function(result){
	    	console.log(result);
	       console.log(result.datos.nombre);	       
	       var nombre =result.datos.nombre;

	       $(".intro-lead-in").html("¡Hola "+nombre+"!");

	       $.speech({
			            key: 'ef6ee7a9aaf941d7b0f4bdb89c597d1e',
			            src: '¡hola '+nombre+'! bienvenido al museo de Boca',
			            hl: 'es-mx',
			            r: 0, 
			            c: 'mp3',
			            f: '44khz_16bit_stereo',
			            ssml: false
		        	});	       

	    }
	});*/

	  


	function animarYsaludar(){
		$.speech({
			            key: 'ef6ee7a9aaf941d7b0f4bdb89c597d1e',
			            src: '¡hola '+nombre+'! bienvenido al museo de Boca',
			            hl: 'es-mx',
			            r: 0, 
			            c: 'mp3',
			            f: '44khz_16bit_stereo',
			            ssml: false
		        	});	

		
			$(".uno").css("visibility","unset");
			$('.uno').animateCss('zoomInUp').one(animationFinished, function(){
			$(".nombre").css("visibility","unset");
			$(".nombre").addClass("area");
			$(".nombre").animateCss('zoomIn').one(animationFinished,function(){
				
				$(".dos").css("visibility","unset");
				$(".dos").animateCss('zoomInDown');
				//
			});		
			
		});
	}

	function initAnimation(){
		$.fn.extend({
		    animateCss: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
		            $(this).removeClass('animated ' + animationName);
		        });
		        return this;
		    }
		});
	}


	


})