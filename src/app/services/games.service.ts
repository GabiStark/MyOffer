import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const autorization: HttpHeaders = new HttpHeaders({
  "Authorization": "Basic"
})

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gameId: number = 1293830;


  constructor(

    private api: HttpClient,

  ) {



    //Para transformar de nombre a ID
    //GET http://api.steampowered.com/ISteamApps/GetAppList/v2

    //API Epic https://dev.epicgames.com/docs/en-US/api-ref/structs/eos-ecom-catalog-offer

  }

   call(num:number){

       this.api.get(`https://store.steampowered.com/api/appdetails?appids=${(num)}`, {
         headers:autorization
       })
         .subscribe(respuesta => {console.log(respuesta)})

   /*  this.api.get(`https://store.steampowered.com/api/appdetails?appids=${(this.gameId)}`)
       .subscribe(respuesta => {console.log(respuesta)})

     return this.api.get<string>(`https://store.steampowered.com/api/appdetails?appids=${(num)}`)
  */
   }

  pintar(){



  }

}
