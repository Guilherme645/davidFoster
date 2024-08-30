import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';


// PrimeIcons
import { PrimeIcons } from 'primeng/api';

import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { InicialComponent } from './pages/inicial/inicial.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FrameoneComponent } from './components/frameone/frameone.component';
import { FrameTwoComponent } from './components/frameTwo/frameTwo.component';
import { FramethreeComponent } from './components/framethree/framethree.component';
import { FrameFourComponent } from './components/frameFour/frameFour.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DestaquesComponent } from './components/destaques/destaques.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    InicialComponent,
    SidebarComponent,
    FrameoneComponent,
    FrameTwoComponent,
    FramethreeComponent,
    FrameFourComponent,
    PerfilComponent,
    DestaquesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    ButtonModule,
    CardModule,
    TableModule,
    SidebarModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    DialogModule,
    TooltipModule,
    RouterOutlet,
    GalleriaModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
