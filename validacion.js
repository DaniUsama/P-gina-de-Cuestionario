
function validar(){

    var usuario,clave,clave2,direccion,ciudad, provincia, numHuespedes, correo, tipo, servicio, pension, comentario;
    usuario=document.getElementById("nombre_usuario").value;
    clave=document.getElementById("clave_usuario").value;
    clave2=document.getElementById("clave_usuario2").value;
    direccion=document.getElementById("direccion").value;
    ciudad=document.getElementById("ciudad").value;
    provincia=document.getElementById("provincia").value;
    numHuespedes=document.getElementById("numero_huéspedes").value;
    correo=document.getElementById("contacto").value;
    tipo = document.getElementsByName("Tipo");
    servicio= document.getElementsByName("Servicio");
    pension= document.getElementsByName("Pension");
    comentario=document.getElementById("comentarios_sugerencias").value;
   
    //validar nombre usuario
    if(usuario == "") {
        alert("El campo nombre de usuario esta vacío"); 
        document.getElementById("nombre_usuario").focus();
        return false;
    } else if(usuario.length>15 || usuario.length<5){
        alert("El nombre de usuario debe tener entre 5 y 15 caracteres"); 
        document.getElementById("nombre_usuario").focus();
        return false;
    }

    //validar claves
    if((clave == "") && (clave2 == "")) {
        alert("El campo de contraseña esta vacío"); 
        document.getElementById("clave_usuario").focus();
        return false;
    } else if(clave!=clave2){
       alert("Las contraseñas no coinciden");
       document.getElementById("clave_usuario").focus();
       return false;
    } else if((clave.length>15 || clave.length<5) && (clave2.length>15 || clave2.length<5)){
        alert("Las contraseñas deben tener entre 5 y 15 caracteres"); 
        document.getElementById("clave_usuario").focus();
        return false;
    }
    
    //validar dirección
    if(direccion == "") {
        alert("El campo dirección esta vacío"); 
        document.getElementById("direccion").focus();
        return false;
    } else if(direccion.length>20 || direccion.length<5){
        alert("La dirección debe tener entre 5 y 20 caracteres"); 
        document.getElementById("direccion").focus();
        return false;
    }

    //validar ciudad
    if(ciudad == "") {
        alert("El campo de ciudad esta vacío"); 
        document.getElementById("ciudad").focus();
        return false;
    } else if(ciudad.length>20 || ciudad.length<5){
        alert("La ciudad debe tener entre 5 y 20 caracteres"); 
        document.getElementById("ciudad").focus();
        return false;
    }
    
    //validar provincia
    if(provincia == "") {
        alert("El campo de provincia esta vacío"); 
        document.getElementById("provincia").focus();
        return false;
    } else if(provincia.length>20 || provincia.length<3){
        alert("La provincia debe tener entre 3 y 20 caracteres"); 
        document.getElementById("provincia").focus();
        return false;
    }

    //validar número huéspedes
    if(numHuespedes == "") {
        alert("El campo de número huéspedes esta vacío"); 
        document.getElementById("numero_huéspedes").focus();
        return false;
    } 

    //validar servicio
    var seleccionado2 = false;
    for(var i=0; i<servicio.length; i++) {
    if(servicio[i].checked) {
        seleccionado2 = true;
        break;
    }
    }
    if(!seleccionado2) {
        alert("Seleccione al menos un servicio");
        return false;
    }

    //validar tipo de habitación
    var seleccionado = false;
    for(var i=0; i<tipo.length; i++) {
     if(tipo[i].checked) {
        seleccionado = true;
        break;
    }
    }
    if(!seleccionado) {
        alert("Seleccione un tipo de habitación");
        return false;
    }
   
    //validar pensión
    var seleccionado3 = false;
    for(var i=0; i<pension.length; i++) {
    if(pension[i].checked) {
        seleccionado3 = true;
        break;
    }
    }
    if(!seleccionado3) {
        alert("Seleccione un tipo de pensión");
        return false;
    }

    //validar comentarios y sugerencias
    if(comentario == "") {
        alert("El campo de comentarios y sugerencias esta vacío"); 
        document.getElementById("comentarios_sugerencias").focus();
        return false;
    } else if(comentario.length>150 || comentario.length<5){
        alert("Los comentarios y sugerencias deben tener entre 5 y 150 caracteres"); 
        document.getElementById("comentarios_sugerencias").focus();
        return false;
    }

    //validar correo
    var expresion= /\w*@\w*\.+[a-z]/;
    if(correo == "") {
        alert("El campo de correo esta vacío"); 
        document.getElementById("contacto").focus();
        return false;
    }
    else if(!expresion.test(correo)){
    alert("El correo no es válido");
    return false;
    }
 
    //validar aceptar política 
    var elemento;
    elemento = document.getElementById("política");
    if( !elemento.checked ) {
        alert("Debe aceptar la política de privacidad");
        return false;
    }     

}

