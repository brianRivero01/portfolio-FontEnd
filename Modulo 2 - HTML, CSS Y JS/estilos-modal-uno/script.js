//CAMBIO DE FOTO DE PERFIL
$("#inputImg").on("change", function(){
    let imagenNueva = $(this)[0].files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(imagenNueva);
    fileReader.onload = function(){
       
        let URLs = fileReader.result 

        $("#imgPerfilModal").attr("src",URLs);
        $(document).on("click", "#save",function(){
            $("#Modal1").modal('hide');
            $("#img-profile").attr("src",URLs);
        
            
        });
    };
});

//CAMBIO DE BANNER
$("#inputBanner").on("change", function(){
    let bannerNuevo = $(this)[0].files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(bannerNuevo);
    fileReader.onload = function(){
       
        let URLs = fileReader.result 

        $("#imgBannerModal").attr("src",URLs);
        $(document).on("click", "#save",function(){
            $("#Modal1").modal('hide')
            $("#img-banner").attr("src",URLs);
        
            
        });
    };
});

//SECCIÓN 1
$(document).on('click', '#subModal', function() {
    $('#ModalCambiarDatosPersonales').modal('show');

    $(document).on("click", "#save-SUB",function(){
        $("#ModalCambiarDatosPersonales").modal('hide');
        nuevoTitulo = $("#agregar_titulo").val();
        $("#tituloModal").text(nuevoTitulo);
        nuevoNombre = $("#agregar_nombre").val();
        $("#nombreModal").text(nuevoNombre);
        nuevaDescripcion = $("#textareaContenido").val();
        $("#acercaDeMiModal").text(nuevaDescripcion);

        $(document).on("click", "#save",function(){
            $("#Modal1").modal('hide');
            $("#title").text(nuevoTitulo);
            $("#name").text(nuevoNombre);
            $("#info-personal").text(nuevaDescripcion);
        });
    });
});


//SECCIÓN 2

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





$("#inputImgDeCurso").on("change", function(){
    let imagenNueva = $(this)[0].files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(imagenNueva);
    fileReader.onload = function(){
    
        let URLs = fileReader.result 
        $("#imagen_cargada").css("display","block")
  
        $(document).on("click", "#saveCurso",function(){
            $("#ModalCursos").modal('hide');
            
  
            const caja = document.getElementById("caja_contenedora_cursos")
  
            //PRIMERO AGREGO EL DIV
            const est_box = document.createElement("div");
            est_box.classList.add("est-box");
            caja.appendChild(est_box);
  
            //DIV PARA LA IMAGEN
            const cajaDeImg = document.createElement("div");
            cajaDeImg.classList.add("cajaDeImg");
            est_box.appendChild(cajaDeImg);
  
            //DIV PARA LA DESCRIPCIÓN DEL CURSO 
            const cajaDescripc = document.createElement("div");
            cajaDescripc.classList.add("cajaDescripc");
            est_box.appendChild(cajaDescripc);
  
            //IMAGEN
            const imagen = document.createElement("img");
            $(imagen).attr("src",URLs);
            imagen.classList.add("logo-esc");
            
  
            //TITULO
            const valorTitulo = $("#tituloCursoNuevo").val();
            const titulo_curso = document.createElement("h4");
            titulo_curso.textContent = valorTitulo;
            titulo_curso.classList.add("pb-1");
            
  
            //VALOR DEL SELECT (MODALIDAD)
            var estado = $("#modalidadDelCurso").val();
            const modalidad_curso = document.createElement("p");
            modalidad_curso.textContent = "CURSO " + estado;
            modalidad_curso.classList.add("parrafos","text-esc-data");
            
  
            //VALOR DEL SELECT (NIVEL)
            var nivel= $("#nivelDelCurso").val();
            var nivel_curso = document.createElement("p");
            nivel_curso.textContent = "NIVEL: " + nivel;
            nivel_curso.classList.add("parrafos","text-esc-data");
            
  
            //PERIODO
            const valorPeriodo = $("#duracion").val();
            const new_periodo = document.createElement("p");
            new_periodo.textContent = "PERIODO: " + valorPeriodo;
            new_periodo.classList.add("parrafos","text-esc-data");
            
  
            //TECNOLOGÍAS
            const valorTecnologías = $("#tecnologiasAprendidas").val();
            const new_tech = document.createElement("p");
            new_tech.textContent = "TECNOLOGÍAS VISTAS: " + valorTecnologías;
            new_tech.classList.add("parrafos","text-esc-data");
        
  
            //AGREGO LOS ELEMENTOS CREADOS EN EL DIV CORRESPONDIENTE 
  
  
            cajaDeImg.appendChild(imagen);
  
            //DESCRIP
            cajaDescripc.appendChild(titulo_curso)
            cajaDescripc.appendChild(modalidad_curso)
            cajaDescripc.appendChild(nivel_curso)
            cajaDescripc.appendChild(new_periodo)
            cajaDescripc.appendChild(new_tech)
  
            //LA IMAGEN SE SACA
        });  
    };
  });
  

        

