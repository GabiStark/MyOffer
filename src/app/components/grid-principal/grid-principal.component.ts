import { Component } from '@angular/core';
import {GamesService} from "../../services/games.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-grid-principal',
  standalone: true,
  imports: [],
  templateUrl: './grid-principal.component.html',
  styleUrl: './grid-principal.component.css'
})
export class GridPrincipalComponent {



  constructor(

    private api: HttpClient,
    private jueguicos: GamesService = new GamesService(api)

  ) {
  }

//id:number=1293830;

  //private servicioGames: GamesService = new GamesService()

  testGame(){

    let a:number = 1293830;

  this.jueguicos.call(a);

  }

}
