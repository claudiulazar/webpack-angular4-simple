import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import conf from "./config.json";

console.log(conf);

@Injectable()
export class Config {

    private config: Object = null;
    private env:    Object = null;

    constructor() {
      this.config = conf;
    }

    /**
     * Use to get the data found in the second file (config file)
     */
    public get(key: any) {
      console.log(this.config[key]);
        return this.config[key];
    }

    /**
     * Use to get the data found in the first file (env file)
     */
    public getEnv(key: any) {
        return this.env[key];
    }

}
