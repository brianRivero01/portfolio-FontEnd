import { Component, OnInit } from '@angular/core';
declare var $: any;  

@Component({
  selector: 'app-experiencias-laborales',
  templateUrl: './experiencias-laborales.component.html',
  styleUrls: ['./experiencias-laborales.component.css']
})
export class ExperienciasLaboralesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var bandera = 0;
    $("#botonAgregarModalExperiencias").click(function () {
        $("#modalAgregarExperienciaLab").modal('show');  
        $(document).on("click", "#save",function(){
            $("#modalAgregarExperienciaLab").modal('hide');
            bandera = 1; //ME INDICA QUE SE AGREGÓ UN EMPLEO 
            //SE OBTIENEN LOS VALORES DE LOS INPUT 
            let valorEmpleo = $("#valorEmpleo").val();
            let valorFecha = $("#valorFecha").val();
            let valorDesc = $("#valorDescrip").val();

            //LUEGO SE AGREGAN EN LOS PARRAFOS VACÍOS
            $("#empleoTresDelModal").text(valorEmpleo)
            $("#fechaTresDelModal").text(valorFecha)
            $("#descripcionTercerEmpleo").text(valorDesc)


            $(document).on("click", "#savee",function(){
                $("#Modal2").modal('hide');
                $("#tituloEmpleoTres").text(valorEmpleo);
                $("#fechaEmpleoTres").text(valorFecha);
                $("#descripcionEmpleoTres").text(valorDesc);

            });

        });
    });

    $("#botonEditarModalExperiencias").click(function () {
        $("#modalEditarExperienciaLab").modal('show');

        if(bandera==0){  //Si no se agregó un nuevo empleo se va a ocultar la caja perteneciente a este
            $("#cajaOculta").css("display", "none");
            
        }

        else{
            $("#cajaOculta").css("display", "block");
            //VALORES DEL TERCER EMPLEO
            var valorEmpleo = $("#valorEmpleo").val();
            var valorFecha = $("#valorFecha").val();
            var valorDesc = $("#valorDescrip").val();

            //LOS MUESTRA EN EL MODAL DE EDITAR
            $("#empleoTresTitulo").val(valorEmpleo);
            $("#empleoTresFecha").val(valorFecha);
            $("#empleoTresDescripcion").val(valorDesc);

            
            
        };

        $(document).on("click", "#save-SUB",function(){
            $("#modalEditarExperienciaLab").modal('hide');
            

            //EMPLEO 1
            let nuevoEmpleo = $("#agregar_empleo").val();
            $("#empleoUnoDelModal").text(nuevoEmpleo);

            let fechaDeNuevoEmpleo = $("#agregar_fecha").val();
            $("#fechaUnoDelModal").text(fechaDeNuevoEmpleo);

            let descPrimerEmpleo = $("#descripcionEuno").val();
            $("#descripcionPrimerEmpleo").text(descPrimerEmpleo)

            //EMPLEO 2
            let nuevoEmpleoDos = $("#empleoDosTitulo").val();
            $("#empleoDosDelModal").text(nuevoEmpleoDos);

            let fechaDeNuevoEmpleoDos = $("#empleoDosFecha").val();
            $("#fechaDosDelModal").text(fechaDeNuevoEmpleoDos);

            let nuevaDescripcionDos = $("#empleoDosDescripcion").val();
            $("#descripcionSegundoEmpleo").text(nuevaDescripcionDos);

            //EMPLEO 3
            if(bandera==1){ 
                var nuevoEmpleoTres = $("#empleoTresTitulo").val();
                $("#empleoTresDelModal").text(nuevoEmpleoTres);

                var fechaDeNuevoEmpleoTres = $("#empleoTresFecha").val();
                $("#fechaTresDelModal").text(fechaDeNuevoEmpleoTres);

                var nuevaDescripcionTres = $("#empleoTresDescripcion").val();
                $("#descripcionTercerEmpleo").text(nuevaDescripcionTres);
            };
            



            $(document).on("click", "#savee",function(){
                $("#Modal2").modal('hide');

                $("#tituloEmpleoUno").text(nuevoEmpleo);
                $("#fechaEmpleoUno").text(fechaDeNuevoEmpleo);
                $("#descripcionEmpleoUno").text(descPrimerEmpleo);

                $("#tituloEmpleoDos").text(nuevoEmpleoDos);
                $("#fechaEmpleoDos").text(fechaDeNuevoEmpleoDos);
                $("#descripcionEmpleoDos").text(nuevaDescripcionDos);

                if(bandera==1){ 
                    $("#tituloEmpleoTres").text(nuevoEmpleoTres);
                    $("#fechaEmpleoTres").text(fechaDeNuevoEmpleoTres);
                    $("#descripcionEmpleoTres").text(nuevaDescripcionTres);
                };

            });
        });
    });
  }

}
