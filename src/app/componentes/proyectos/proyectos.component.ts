import { Component, OnInit } from '@angular/core';
declare var $: any;  

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $(".effect-icon-hidden").on({
      mouseenter: function () {
        $(this).css("opacity", "1")
        $(this).transition({ x: '0%', opacity: 1.0 });
      },
      mouseleave: function () {
        $(this).css("opacity", "0")
      }
    });

  }

}
