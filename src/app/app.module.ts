import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { AuthGuard } from "./authGuard.component";
import { routing } from "./app.routes";

import { ComponentsModule }  from "./components/components.module";
import { Config } from "./config/config";
import { ProvidersModule } from "./services/providers.module";

import { ButtonModule,
         PasswordModule,
         AccordionModule
      } from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ComponentsModule,
    ProvidersModule,
    HttpModule,
    ButtonModule,
    PasswordModule
  ],
  declarations: [
    AppComponent,

  ],
  providers: [
        AuthGuard,
        Config,
 ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
