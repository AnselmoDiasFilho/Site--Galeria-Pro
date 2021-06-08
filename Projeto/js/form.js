const fields = document.querySelectorAll(['input.required'])

// eliminar o bubble
  //event.preventDefault

//console.log(fields)

function customValidation(event) {
    const field = event.target


   
    function verifyErrors() {   
        let foundError = false;

       for(let error in field.validity){
           // se não for customError
           //então verificar se tem erro
           FoundError = error
           if (error = "customError" && field.validity[erro]) {  //SUBSTITUI O SINAL DE IGUAL POR DIFERENTE
        }

       }

       return foundError;
    }

    const error = verifyError()
    console.log(" Error Exists", error)

    if (error) {
        //Trocar mensagem de required
        field.setCustomValidity("Esse campo está inválido platininhaa ")
    } else {
        field.setCustomValidity("")
    }

    
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