import { Injectable } from '@angular/core';
import { Http, Headers, Response , RequestOptions,RequestMethod} from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from  'rxjs/Rx';

import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Config } from "../config/config";

import { CustomHttp } from "./custom-http.service";

@Injectable()
export class AuthentificationService
{

   result :any;
   constructor(
               private _config: Config,
               private _http: CustomHttp,
               private _router:Router
               ) {
               }


        login(username: string, password : string){

          return this._http.post("api/v0/login", {username:username, password:password})
                           .map((res: Response) => res.json())
                           .subscribe(res=> {
                              Cookie.set("accessToken", res.token.accessToken);
                              Cookie.set("refreshToken", res.token.refreshToken);
                              this._router.navigate([""]);
                           })

         }

        logout() {
            // remove user from local storage to log user out

            Cookie.delete("accessToken");
            Cookie.delete("refreshToken");
            window.location.href="http://localhost:3032";
        }




}
