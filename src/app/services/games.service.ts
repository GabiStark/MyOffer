import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gameId: number = 1293830;

  constructor(
    private api: HttpClient

  ) {

    this.api.get(`https://store.steampowered.com/api/appdetails?appids=${(this.gameId)}`)

    //Para transformar de nombre a ID
    //GET http://api.steampowered.com/ISteamApps/GetAppList/v2

  }

  searchGame(){



  }

}
