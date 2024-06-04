import { Routes } from '@angular/router';
import {NotFoundComponent} from "./pages/not-found/not-found.component";

export const routes: Routes = [
    {
        path:"",
        title:"Home",
        loadComponent: ()=> import("./layouts/home/home.component").then(m=>m.HomeComponent),
        children: [
          {
            path: "topBar",
            loadComponent: () => import ("./components/top-bar/top-bar.component").then(m => m.TopBarComponent),
            title: "topBar"
          },
          {
            path: "gridPrincipal",
            loadComponent: () => import ("./components/grid-principal/grid-principal.component").then(m => m.GridPrincipalComponent),
            title: "gridPrincipal"
          },
          {
            path: "footer",
            loadComponent: () => import ("./components/footer/footer.component").then(m => m.FooterComponent),
            title: "footer"
          }
        ]
    },/*
  {
    path:"MyGames",
    title:"MyGames",
    loadComponent: ()=> import ("./pages/my-games/my-games.component").then(m=>m.MyGamesComponent),
    children: [
      {
        path: "topBar",
        loadComponent: () => import ("./components/top-bar/top-bar.component").then(m => m.TopBarComponent),
        title: "topBar"
      },
      //TODO Componente grid juegos tipo tarjeta
      {
        path: "footer",
        loadComponent: () => import ("./components/footer/footer.component").then(m => m.FooterComponent),
        title: "footer"
      }
    ]
  },
  {
    path:"/SpecificGame",
    title:"SpecificGame",
    loadComponent: ()=> import ("./pages/specific-game/specific-game.component").then(m=>m.SpecificGameComponent),
    children: [
      {
        path: "topBar",
        loadComponent: () => import ("./components/top-bar/top-bar.component").then(m => m.TopBarComponent),
        title: "topBar"
      },
      //TODO Componente juego tipo tarjeta pero expandido con más detalles del juego
      {
        path: "footer",
        loadComponent: () => import ("./components/footer/footer.component").then(m => m.FooterComponent),
        title: "footer"
      }
    ]
  },*/

  {
    path:"**",
    component: NotFoundComponent
  }

];
