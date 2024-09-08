import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Projet-Frontend';

  constructor(private router: Router) {}

  /*Méthode pour ne pas afficher le lien accueil sur la page d'accueil*/
  public get isOnHomePage(): boolean {
    return this.router.url === '/';
  }

  //Méthodes pour gérer l'affichage logo 2D et 3D
  public get isOn2DPage(): boolean {
    return (
      this.router.url.includes('/carre') ||
      this.router.url.includes('/triangle') ||
      this.router.url.includes('/rectangle') ||
      this.router.url.includes('/losange') ||
      this.router.url.includes('/cercle')
    );
  }

  public get isOn3DPage(): boolean {
    return (
      this.router.url.includes('/cone') ||
      this.router.url.includes('/sphere') ||
      this.router.url.includes('/cylindre') ||
      this.router.url.includes('/cube')
    );
  }

  public get imageSource(): string {
    if (this.isOn2DPage) {
      return 'assets/images/2d.png';
    } else if (this.isOn3DPage) {
      return 'assets/images/3d.png';
    }
    return '';
  }
}
