$(document).ready(function(){
	
	var accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJhZG1pbiIsInJvbGVzIjoiW1wiYWRtaW5cIixcInJlY2VwY2lvblwiXSIsImlhdCI6MTUwMTYyNjAwOX0.Wj2NxJ4pc25oRqP-AvqX8KaWJZM4KCfVfY0-Qw28wdk';
	var mensajeDeGuardado = "";
	cargarDatosPrevios();

		
		
	
	
	$("form").submit(function(e){
		e.preventDefault();
		
		var nombre, dni, idIdioma, email, idPulsera;

		nombre = $('#name').val();
		idIdioma = $("#idioma").val();
		dni = $('#dni').val();
		email = $('#email').val();
		idPulsera = $('#idPulsera').val();

		var arrayData = {};		

		arrayData["nombre"] = nombre;
		arrayData["dni"] = dni;
		arrayData["id_idioma"] = idIdioma;
		arrayData["email"] = email;

		console.log("enrolando tipo");

		if (validarDatos(arrayData, idPulsera)){
			$("#mensaje").html("Agregando visitante...");
			$("#test").colorbox(
				{inline:true,
				 width:"50%",
				 onClosed: function function_name(argument) {
				 	$("#mensaje").html("");
				 }
				});
			$("#test").click();
			enrolarVisitante(arrayData, idPulsera);
		}else{
			alert(mensajeDeGuardado);
		}
		

	});


	function validarDatos(datosIngresados, idPulsera){

		if(datosIngresados.nombre == ""){
			mensajeDeGuardado = "Por favor ingresá el nombre.";
			return false;
		}else if(datosIngresados.dni == ""){
			mensajeDeGuardado = "Por favor ingresá el DNI.";
			return false;
		}else if(idPulsera == ""){
			mensajeDeGuardado = "Por favor acercá una pulsera al lector."
			return false;
		}

		return true;
	}

	function enrolarVisitante(datosIngresados, idPulsera){
		jQuery.ajax ({
		    url: "https://boca-backend.herokuapp.com/enrolar",
		    type: "POST",
		    headers:{'x-access-token' : accessToken},
		    data: JSON.stringify(datosIngresados),
		    dataType: "json",
		    contentType: "application/json; charset=utf-8",
		    success: function(result){
		       	console.log("grabado!");
		    	console.log("fue grabado con el id: " + result.id);

		    	/*** Enrolado el visitante, le guardo la pulsera ***/

		    	enrolarPulsera(result.id, idPulsera);
		    }
		});
	}


	function enrolarPulsera(idVisitante, idPulsera){
		

		var arrayData = {};

		arrayData["id_visitante"] = parseInt(idVisitante);
		arrayData["uid_pulsera"] = idPulsera;
		console.log("enrolando pulsera");
		jQuery.ajax ({
		    url: "https://boca-backend.herokuapp.com/enrolar-pulsera",
		    type: "POST",
		    headers:{'x-access-token' : accessToken},
		    data: JSON.stringify(arrayData),
		    dataType: "json",
		    contentType: "application/json; charset=utf-8",
		    success: function(result){
		       	console.log("pulsera enrolada!");
		    	console.log(result);
		    	
		    	$("#mensaje").html("Visitante Agregado!");
		    	limpiarCampos();
		    },
		    error: function(result){
		    	console.log(result);
		    }
		});
	}

	
	/*** Guarda lo ingresado en local storage para que no muera con el reload ***/

	window.onbeforeunload = function() {
	    localStorage.name = $('#name').val();
	    localStorage.email =  $('#email').val();
	    localStorage.dni =  $('#dni').val();
	    localStorage.idioma = $("#idioma").val();
	}

	/*** Borra todos los campos y limpia el localstorage **/
	function limpiarCampos(){
		localStorage.name = "";
	    localStorage.email =  "";
	    localStorage.dni =  "";
	    localStorage.idioma = "";

	    $('#name').val("");
		$('#email').val("");
		$('#dni').val("");
		$("#idPulsera").val("");
	}


	function cargarDatosPrevios(){
		var name = localStorage.name;
		if (name == "undefined") name = "";		
	    if (name !== null && name !== undefined) $('#name').val(name);

	    var email = localStorage.email;
	    if (email == "undefined") email = "";		
	    if (email !== null && name !== undefined) $('#email').val(email);

	    var dni = localStorage.dni;
	    if (dni == "undefined") dni = "";		
	    if (dni !== null && dni !== undefined) $('#dni').val(dni);

	    var idioma = localStorage.idioma;
	    if (idioma == "undefined") idioma = "";		
	    if (idioma !== null && idioma !== undefined) $("#idioma").val(idioma);
	}

});