
function Iniciar(){
    document.getElementById('nom').value="";
    document.getElementById('edad').value=0;
    document.getElementById('nom').focus();
}
// Esta función cambiará el fondo de la página al cargar el documento
function establecerFondo() {
    document.body.style.backgroundImage = "url('c:\Users\ABCDIN\OneDrive\Escritorio\Entrega 2 -Programando Front-End_Riffo2__008D\inicio\Marzo27\img\fondo definitivo.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    
   
document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
}

// Llama a la función para establecer el fondo cuando el documento esté listo
$(document).ready(function(){
    establecerFondo();





$(document).ready(function(){ 
    $("#comprobar").click(function(){ 
        let a=document.getElementById('nom').value;
        let b=parseInt(document.getElementById('edad').value);
        if(b>=18){
            alert('Usted '+a+ ' es mayor de edad');
        }
        else{
            alert('Usted '+a+ ' es menor de edad');
        }
        Iniciar();
    });//comprobar

    /*mensaje que indique si es positivo, negativo o igual a cero*/
    $("#verNumero").click(function(){ 
        let b=parseInt(document.getElementById('numero').value);
        if(b>0){
            alert('El número '+b+' es positivo');
        }else if(b<0){
            alert('El número '+b+' es negativo');
        }else{
            alert('El número es un cero :D');
        }
        document.getElementById('numero').value=0;

    })

});//ready

/*implementamos biblioteca validate de jquery */
$(function(){ 
    $("#mis-datos").validate({ 
        rules:{
            nombre:{
                required: true
            },
            correo:{
                required: true,
                email:true
            },
            telefono:{
                required:true,
                number:true
            },
            fecha:{
                required:true
            },
            pass1:{
                required:true
            },
            pass2:{
                required:true,
                equalTo:"#pass1"
            },

        }//rules
        




    })//fin de validate

})//fin de la función
}
)