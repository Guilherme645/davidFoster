import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent {

  fotos = [
    { name: 'Fotos 1', image: './assets/foto1.png' },
    { name: 'Fotos 2', image: './assets/foto2.png' },
    { name: 'Fotos 3', image: './assets/foto3.png' },
    { name: 'Fotos 4', image: './assets/foto4.png' },
    { name: 'Fotos 5', image: './assets/foto5.png' },
    { name: 'Fotos 6', image: './assets/foto6.png' },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectProject(project: any) {
    // Ação ao selecionar o foto (Ex: abrir um modal, redirecionar, etc.)
    console.log('Fotos selecionado:', project);
  }

}