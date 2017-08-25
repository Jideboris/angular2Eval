import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Data } from "../objects/datas";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
    limit: number = 0;
    bench1: number = 0;
    bench2: number = 0;
    percentage: number = 0;

    datas: Data[] = [];

    constructor(
        private http: Http
    ) {
    }


    public calculate(mainlimit: string, mainretension: string, typeofexecution: string): Observable<Data[]> {
        this.bench1 = parseFloat(mainretension);
        this.bench2 = this.bench1;
        this.limit = parseFloat(mainlimit);
        this.percentage = this.bench1 / this.limit * 100;
        return Observable.create(x => {
            x.next(this.datas.concat({ refdate: new Date(), benchmark1: this.percentage.toString(), benchmark2: this.bench2.toString() }));
        }).catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }

}
