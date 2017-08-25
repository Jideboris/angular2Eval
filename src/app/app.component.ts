import { Component, Input } from '@angular/core';
import { DropdownValue } from "./objects/dropdownvalue";
import { Data } from "./objects/datas";
import { DataServiceService } from "./services/data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataServiceService]
})
export class AppComponent {

  public edited = false;

  @Input()
  mainlimit: string;

  @Input()
  mainretention: string;

  @Input()
  typeofexecution: string;

  @Input()
  datas: Data[] = [];
  constructor(
    private dataServiceService: DataServiceService
  ) {
    console.log(new Date())
    this.mainlimit = '';
    this.mainretention = '';
    this.typeofexecution = '0'
  }

  setdisplay() {
    this.edited = false;
  }
  compute() {
    
    this.edited = true;
    this.dataServiceService
      .calculate(this.mainlimit,this.mainretention,this.typeofexecution)
      .subscribe(
        (todos) => {
          this.datas = todos;
        }
      );

   
  }
}
