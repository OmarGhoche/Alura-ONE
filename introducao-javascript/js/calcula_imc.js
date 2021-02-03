var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


function refreshRed() {
	var pacientes = document.querySelectorAll(".paciente");

	for (var i = 0; i < pacientes.length; i++) {

		var paciente = pacientes[i];

		var pesoPaciente = paciente.querySelector(".info-peso").textContent;
		var alturaPaciente = paciente.querySelector(".info-altura").textContent;
		var imcPaciente = calculaImc(pesoPaciente, alturaPaciente);

		if (imcPaciente < 18.5 || imcPaciente > 24.9) {paciente.classList.add("imc-nao-ideal")};

		paciente.querySelector(".info-imc").textContent = imcPaciente;
	}
}


function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}


refreshRed();