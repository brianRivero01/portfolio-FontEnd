$(document).on('click', '#Crear', function() {
    $('#ModalCrear').modal('show');
});

$(document).on('click', '#agregar_nombres', function() {
    $('#ModalAgregarNombre').modal('show');
});

$(document).on("click", "#save",function(){
    $("#ModalAgregarNombre").modal('hide');
    nuevoNombre = $("#agregar_nombre").val()
    $("#nameModal1").text(nuevoNombre)

    
});