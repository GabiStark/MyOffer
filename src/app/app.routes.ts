import { Routes } from '@angular/router';

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
    }

];
