import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent implements OnInit {

  fotos = [
    { name: 'Fotos 1', image: './assets/foto1.png' },
    { name: 'Fotos 2', image: './assets/foto2.png' },
    { name: 'Fotos 3', image: './assets/foto3.png' },
    { name: 'Fotos 4', image: './assets/foto4.png' },
    { name: 'Fotos 5', image: './assets/foto5.png' },
    { name: 'Fotos 6', image: './assets/foto6.png' },
  ];

  selectedImage: string | null = null;
  selectedCaption: string = '';

  constructor() {}

  ngOnInit(): void {}

  openModal(image: string) {
    this.selectedImage = image;
    const project = this.fotos.find(p => p.image === image);
    this.selectedCaption = project ? project.name : '';
    document.getElementById('imageModal')?.style.setProperty('display', 'block');
  }

  closeModal() {
    this.selectedImage = null;
    document.getElementById('imageModal')?.style.setProperty('display', 'none');
  }
}
