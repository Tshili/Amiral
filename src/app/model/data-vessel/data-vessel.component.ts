import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-vessel',
  templateUrl: './data-vessel.component.html',
  styleUrls: ['./data-vessel.component.css']
})
export class DataVesselComponent implements OnInit {

    id : number;
    ipPAdress : string;
    status : string;
    timeElapsed: number; 
    token: number;

  constructor(id:number,ipPAdress:string,status:string,timeElapsed:number, token:number ) {
    this.id = id;
    this.ipPAdress = ipPAdress;
    this.status = status;
    this.timeElapsed=timeElapsed;
    this.token = token;
   }

  ngOnInit() {
  }

}
