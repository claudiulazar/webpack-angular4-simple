import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AuthentificationService } from "./authentification.service";
import { CustomHttp } from "./custom-http.service";

@NgModule({
    providers:[
      AuthentificationService,
      CustomHttp
   ]
}) export class ProvidersModule { }
