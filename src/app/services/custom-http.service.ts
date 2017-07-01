import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs, RequestOptions , Headers,} from "@angular/http";

import { Config } from "../config/config";
import { Observable } from  'rxjs/Rx';
import { Cookie } from "ng2-cookies/ng2-cookies";

@Injectable()
export class CustomHttp {
    constructor(
        private http: Http,
        private config: Config,
     ) {
    }

    // Setting the apiUrl for a much simple http request
    private getUrl(path: string) {
        return this.config.get("apiUrl") + path;
    }

    get(path: string, options?: RequestOptionsArgs) {
      var url = this.getUrl(path);
      options = this.getRequestOptionArgs(options);
        return this.http.get(url, options)
                 .catch(err =>  {
                       if(err.status == 401 || err.status == 403) {
                          // this is for redirecting to another ng4 app which provides the login
                         window.location.href="http://localhost:3032";
                       }
                     return Observable.throw(err); // observable needs to be returned or exception raised
                  });
    }

    delete(path: string, options?: RequestOptionsArgs) {
        var url = this.getUrl(path);
        return this.http.delete(url, this.getRequestOptionArgs(options)) .catch(err =>  {
               if(err.status == 401 || err.status == 403) {
                  // this is for redirecting to another ng4 app which provides the login
                  window.location.href="http://localhost:3032";
               }
             return Observable.throw(err); // observable needs to be returned or exception raised
          });
    }

    post(path: string, body: any, options?: RequestOptionsArgs): Observable<any> {
      var url = this.getUrl(path);
        return this.http.post(url, body, this.getRequestOptionArgs(options)) .catch(err =>  {
               if(err.status == 401 || err.status == 403) {
                  // this is for redirecting to another ng4 app which provides the login
                  window.location.href="http://localhost:3032";
               }
             return Observable.throw(err); // observable needs to be returned or exception raised
          });
    }

     put(path: string, body: any, options?: RequestOptionsArgs): Observable<any> {
       let url = this.getUrl(path);
         return this.http.put(url, body, this.getRequestOptionArgs(options)) .catch(err =>  {
                if(err.status == 401 || err.status == 403) {
                   // this is for redirecting to another ng4 app which provides the login
                  window.location.href="http://localhost:3032";
                }
              return Observable.throw(err); // observable needs to be returned or exception raised
           });
     }

     private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }

        if (options.headers == null) {
           options.headers = new Headers();
        }

        // Verifies if accessToken exists in Cookies, if yes, then we use it
        if(Cookie.get("accessToken")){
           options.headers.append('Authorization', "Bearer "+Cookie.get('accessToken'));
      }
        return options;
     }
}
