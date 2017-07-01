import { Routes, RouterModule } from '@angular/router';
import {  ModuleWithProviders } from "@angular/core";

import { AuthGuard } from "./authGuard.component";
import { TestComponent } from "./components//test-component/test-component.component";


export const routes: Routes = [
      {
         path:"",
         component: TestComponent,
      },
      {
          path: "",
          redirectTo: "",
          pathMatch: "full"
      },
      {
          path: "**",
          redirectTo: ""
      }
    ];

    export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
