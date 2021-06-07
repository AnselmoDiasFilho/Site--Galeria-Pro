const fields = document.querySelectorAll(['input.required'])

//console.log(fields)

function customValidation(event) {
    const field = event.target

    //Trocar mensagem de required
    field.setCustomValidity("Esse campo está inválido platininhaa ")
}

for (field of fields){
    field.addEventListener("invalid", customValidation)
}


























































document.querySelector('form')
.addEventListener('submit', event => {
    console.log('enviar formulario')

    //n vai enviar o formulario
    event.preventDefault
})