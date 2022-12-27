import validator from './validator.js';

/* --> botão de abrir o formulário */

const btnAbrirFormulario = document.querySelector("#btn-abrir-formulario");
const formularioVar = document.querySelector("#formulario");

btnAbrirFormulario.addEventListener("click", () => {
    btnAbrirFormulario.classList.toggle("active")
    formularioVar.classList.toggle('active');
})

/* Adicionar nome e numero no cartão */



    let cardNumber = document.querySelector("#card .numero");
    let cardName = document.querySelector("#card .nome");
    let inputNumero = document.getElementById("inputNumero")
    let inputNome = document.getElementById("inputNome")

    inputNumero.addEventListener ('keyup', (e) => {
	let valorInput = e.target.value;

	inputNumero.value = valorInput

	// Eliminar espaços em branco
	.replace(/\s/g, '')
	// Eliminar letras
	.replace(/\D/g, '')
	// Eliminar o ultimo espaço
	.trim();

	cardNumber.textContent = valorInput;

    if(valorInput == ''){
		cardNumber.textContent = '#### #### #### ####';
    }
    });

    inputNome.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
    
        inputNome.value = valorInput.replace(/[0-9]/g, '');
        cardName.textContent = valorInput;
    
        if(valorInput == ''){
            cardName.textContent = "Insira Seu Nome";
        }
    });
    

    /* Adicionar data no cartão */

    let validade = document.querySelector("#dataCard")
    let data = document.querySelector("#data")

    data.addEventListener('change', (e) => {
	validade.textContent = e.target.value;

});


const submit = document.querySelector("#submit");
submit.addEventListener("click", function(e) {
  e.preventDefault();
  const number = document.querySelector("#inputNumero");
  const value = number.value;
  const numberValue = Number(value);
  const name = document.querySelector("#inputNome")
  let mensagem = document.querySelector("h2")
  if (value === ""){
    mensagem.textContent = "Preencha o Campo"
  } else if (isNaN(numberValue)) {
    mensagem.textContent = "Digite somente números"
  } else if (!validator.isValid(value)) {
    mensagem.textContent = "Cartão inválido"
  } else {
    cardNumber.textContent = validator.maskify(value),
    mensagem.textContent = "Olá " + name.value + ", cartão " + validator.maskify(value) + " cadastrado com sucesso."
  }
});
