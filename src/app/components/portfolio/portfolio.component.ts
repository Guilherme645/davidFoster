import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  {


  fotos = [
    { url: './assets/foto1.png', alt: 'Foto 1' },
    { url: './assets/foto2.png', alt: 'Foto 2' },
    { url: './assets/foto3.png', alt: 'Foto 3' },
    { url: './assets/foto4.png', alt: 'Foto 4' },
    { url: './assets/foto5.png', alt: 'Foto 5' },
    { url: './assets/foto6.png', alt: 'Foto 6' },
  ];

  displayModal: boolean = false;
  selectedFoto: any = null;

  showImage(foto: any) {
    this.selectedFoto = foto;
    this.displayModal = true;
  }

  onModalHide() {
    this.selectedFoto = null;
  }


}
