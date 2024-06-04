import { Component } from '@angular/core';
import {TopBarComponent} from "../../components/top-bar/top-bar.component";
import {GridPrincipalComponent} from "../../components/grid-principal/grid-principal.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopBarComponent,
    GridPrincipalComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
