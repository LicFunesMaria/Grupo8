function valida_envia(){
  //valido el nombre
  if (document.fvalida.nombre.value.length==0){
       alert("Tiene que escribir su NOMBRE")
       document.fvalida.nombre.focus()
       return 0;
  }

  //valido el apellido
  if (document.fvalida.apellido.value.length==0){
    alert("Tiene que escribir su APELLIDO")
    document.fvalida.nombre.focus()
    return 0;
}

  //valido el interés
  if (document.fvalida.interes.selectedIndex==0){
       alert("Debe seleccionar un motivo de su contacto.")
       document.fvalida.interes.focus()
       return 0;
  }

  //el formulario se envia
  alert("Muchas gracias por enviar el formulario");
  document.fvalida.submit();
}