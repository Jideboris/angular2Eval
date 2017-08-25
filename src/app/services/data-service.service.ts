import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ApiService } from "./api-service";
import { Data } from "../objects/datas";

@Injectable()
export class DataServiceService {

  constructor(
    private api: ApiService
  ) {
  }

  calculate(mainlimit: string, mainretension: string, typeofexecution: string): Observable<Data[]> {
    console.log(this.api.calculate(mainlimit,mainretension,typeofexecution));
    return this.api.calculate(mainlimit,mainretension,typeofexecution);
  }
}
