import { Component, OnInit } from '@angular/core';
declare var $: any;  

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#inputImgDeCurso").on("change", function(){
      let imagenNueva = $("#inputImgDeCurso")[0].files[0];
      let fileReader = new FileReader();
      fileReader.readAsDataURL(imagenNueva);
      fileReader.onload = function(){
      
          let URLs = fileReader.result 
          $("#imagen_cargada").css("display","block")
    
          $(document).on("click", "#saveCurso",function(){
              $("#ModalCursos").modal('hide');
              
    
              let caja = document.getElementById("caja_contenedora_cursos")!
              
    
              //PRIMERO AGREGO EL DIV
              const est_box = document.createElement("div");
              est_box.classList.add("est-box","pt-3");
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
    
  }

}
