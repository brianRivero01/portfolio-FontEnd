import { Component, OnInit } from '@angular/core';
declare var $: any;  

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  ngOnInit(){
    /* CAMBIO DE IMAGEN */
    $("#inputImg").on("change", function(){
      let imagenNueva = $("#inputImg")[0].files[0];
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
      let bannerNuevo = $("#inputBanner")[0].files[0];
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

    /* MODAL PARA EDITAR INFORMACIÓN PERSONAL */
    $(document).on('click', '#subModal', function() {
      $('#ModalCambiarDatosPersonales').modal('show');
  
      $(document).on("click", "#save-SUB",function(){
          $("#ModalCambiarDatosPersonales").modal('hide');
          let nuevoTitulo = $("#agregar_titulo").val();
          $("#tituloModal").text(nuevoTitulo);
          let nuevoNombre = $("#agregar_nombre").val();
          $("#nombreModal").text(nuevoNombre);
          let nuevaDescripcion = $("#textareaContenido").val();
          $("#acercaDeMiModal").text(nuevaDescripcion);
  
          $(document).on("click", "#save",function(){
              $("#Modal1").modal('hide');
              $("#title").text(nuevoTitulo);
              $("#name").text(nuevoNombre);
              $("#info-personal").text(nuevaDescripcion);
          });
      });
  });
  
  }  
  

}
