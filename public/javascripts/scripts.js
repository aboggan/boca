$(document).ready(function(){
	
	var accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJhZG1pbiIsInJvbGVzIjoiW1wiYWRtaW5cIixcInJlY2VwY2lvblwiXSIsImlhdCI6MTUwMTQ0Mjg1NX0.RMi14h-gDn756tsBfEz1NT6ntNZBOXtWa2dztmjmYfM';



	$("form").submit(function(e){
		e.preventDefault();
		
		var nombre, dni, idIdioma, email;

		nombre = $('#name').val();
		idIdioma = 1;
		dni = $('#dni').val();
		email = $('#email').val();

		var arrayData = {};

		arrayData["nombre"] = nombre;
		arrayData["dni"] = dni;
		arrayData["id_idioma"] = idIdioma;
		arrayData["email"] = email;

		console.log("enrolando tipo");


		jQuery.ajax ({
		    url: "https://boca-backend.herokuapp.com/enrolar",
		    type: "POST",
		    headers:{'x-access-token' : accessToken},
		    data: JSON.stringify(arrayData),
		    dataType: "json",
		    contentType: "application/json; charset=utf-8",
		    success: function(result){
		       	console.log("grabado!");
		    	console.log(result.id);
		    	enrolarPulsera(result.id);
		    }
		});

	});


	function enrolarPulsera(idVisitante){
		var idPulsera = $('#idPulsera').val();

		var arrayData = {};

		arrayData["id_visitante"] = idVisitante;
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
		    }
		});
	}


	window.onbeforeunload = function() {
	    localStorage.name = $('#name').val();
	    localStorage.email =  $('#email').val();
	    localStorage.dni =  $('#dni').val();

	}




	var name = localStorage.name;
    if (name !== null) $('#name').val(name);

    var email = localStorage.email;
    if (email !== null) $('#email').val(email);

    var dni = localStorage.dni;
    if (dni !== null) $('#dni').val(dni);
})