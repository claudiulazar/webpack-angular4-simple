import { Injectable } from '@angular/core';
import { CanActivate , Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor (private router: Router) { }

    canActivate (route : ActivatedRouteSnapshot, state : RouterStateSnapshot)
    {
         // Here should be made a request to back-end to see if we can access the company page
        if (Cookie.get("accessToken") && Cookie.get("refreshToken"))
        {
            return true;
        }


        this.router.navigate(['/login']), {queryParams: { returnUrl: state.url}};
        return false;
    }
}
