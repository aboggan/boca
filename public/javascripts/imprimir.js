$(document).ready(function(){

	var accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJhZG1pbiIsInJvbGVzIjoiW1wiYWRtaW5cIixcInJlY2VwY2lvblwiXSIsImlhdCI6MTUwMTQ0Mjg1NX0.RMi14h-gDn756tsBfEz1NT6ntNZBOXtWa2dztmjmYfM';
	
	var idPulsera = $("#idPulsera").text();

	var url = "/9j/4Rx7RXhpZgAATU0AKgAAAAgACQEPAAIAAAAIAAAAegEQAAIAAAAMAAAAggEaAAUAAAABAAAAjgEbAAUAAAABAAAAlgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAngITAAMAAAABAAEAAIdpAAQAAAABAAAAsoglAAQAAAABAAAClgAAA4hYaWFvbWkAAFJlZG1pIE5vdGUzAAAAAEgAAAABAAAASAAAAAEyMDE3OjA4OjAzIDAxOjM2OjU1AAAcgpoABQAAAAEAAAIIgp0ABQAAAAEAAAIQiCIAAwAAAAEAAAAAiCcAAwAAAAEGiQAAkAAABwAAAAQwMjIwkAMAAgAAABQAAAIYkAQAAgAAABQAAAIskQEABwAAAAQBAgMAkgEACgAAAAEAAAJAkgIABQAAAAEAAAJIkgMACgAAAAEAAAJQkgcAAwAAAAEAAgAAkgkAAwAAAAEAEAAAkgoABQAAAAEAAAJYkpAAAgAAAAcAAAJgkpEAAgAAAAcAAAJokpIAAgAAAAcAAAJwoAAABwAAAAQwMTAwoAEAAwAAAAEAAQAAoAIABAAAAAEAAA2AoAMABAAAAAEAABIAoAUABAAAAAEAAAJ3ohcAAwAAAAEAAgAAowEABwAAAAEBAAAApAIAAwAAAAEAAAAApAMAAwAAAAEAAAAApAUAAwAAAAEABAAApAYAAwAAAAEAAAAAAAAAAAAAAAEAAAAMAAAAyAAAAGQyMDE3OjA4OjAzIDAxOjM2OjU1ADIwMTc6MDg6MDMgMDE6MzY6NTUAAAAOOwAAA+gAAADIAAAAZAAAAAAAAABkAAABZQAAAGQ5OTg1MzcAADk5ODUzNwAAOTk4NTM3AAACAAEAAgAAAARSOTgAAAIABwAAAAQwMTAwAAAAAAAACgAFAAUAAAABAAADFAABAAIAAAACUwAAAAACAAUAAAADAAADHAADAAIAAAACVwAAAAAEAAUAAAADAAADNAAFAAEAAAABAAAAAAAG";
	console.log("voy a busddddcar");
	//https://boca-backend.herokuapp.com/visitantes/BE7DB0C6

	var foto1;
	var foto2;

	$("#imprimirBoton").click(function(){
		$("#fotos").print();
	})

	getFotosVisitante();

	function getFotosVisitante(){
		jQuery.ajax ({
		     url: "https://boca-backend.herokuapp.com/fotos-por-pulsera/"+idPulsera,
		    headers:{'x-access-token' : accessToken},
		    type: "GET",
		    contentType: "multipart/form-data",
		    success: function(result){
		    	console.log(result.datos[0].id);
		    	foto1 = result.datos[0].id;
		    	foto2 = result.datos[1].id;
		    	mostrarFoto1();
		    	//mostrarFoto2();
		       /*console.log(result.datos.nombre);	       
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
			        	});*/
	    	}
		});
	}	

	function mostrarFoto1(){
		jQuery.ajax ({
		    url: "https://boca-backend.herokuapp.com/fotos/"+foto1,
		    headers:{'x-access-token' : accessToken},
		    type: "GET",
		    contentType: "multipart/form-data",
		    success: function(data){

		    	//console.log(data.toString('utf8'));
		    	$("#foto1").attr("src", 'data:image/jpeg;base64,'+data);
		    	mostrarFoto2();
		    },
		    error: function(result){
		    	console.log(result);
		    }
		});
	}
	function mostrarFoto2(){
		jQuery.ajax ({
		    url: "https://boca-backend.herokuapp.com/fotos/"+foto2,
		    headers:{'x-access-token' : accessToken},
		    type: "GET",
		    contentType: "multipart/form-data",
		    success: function(data){

		    	//console.log(data.toString('utf8'));
		    	$("#foto2").attr("src", 'data:image/jpeg;base64,'+data);
		    },
		    error: function(result){
		    	console.log(result);
		    }
		});
	}



	/*jQuery.ajax ({
	    url: "https://boca-backend.herokuapp.com/fotos/12",
	    headers:{'x-access-token' : accessToken},
	    type: "GET",
	    contentType: "multipart/form-data",
	    success: function(data){
	    	//console.log(data);
	    	$("#foto1").attr("src", 'data:image/jpeg;base64,'+data);
	    },
	    error: function(result){
	    	console.log(result);
	    }
	});*/




	


})