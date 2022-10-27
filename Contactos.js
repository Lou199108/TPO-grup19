function valida_envia() {
    //valido el nombre
    if (document.fvalida.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

    //valido el apellido
    if (document.fvalida.apellido.value.length == 0){
        alert("Tiene que escribir su apellido")
        document.fvalida.apellido.focus()
        return 0;
    }

    //Seleccionar edad
    if (document.fvalida.edad.selectedIndex == 0){
        alert("Tiene que indicar su edad")
        document.fvalida.edad.focus()
        return 0;
    }

    //Marcar género
    if (formulario.sexo[0].checked == true || 
        formulario.sexo[1].checked == true){
    } else{
        alert("Completa el campo sexo");
        e.preventDefault();
    }

    //Valido el mail
    if (document.fvalida.mail.value.length == 0){
        alert("Tiene que escribir su mail")
        document.fvalida.mail.focus()
        return 0;
    }

    //Escribir en el textarea
    if (document.fvalida.comentario.value.length == 4){
        alert("Tiene que escribir su comentario/mensaje")
        document.fvalida.comentario.focus()
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}
