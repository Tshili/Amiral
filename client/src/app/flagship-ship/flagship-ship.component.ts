import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { DataVesselComponent } from '../model/data-vessel/data-vessel.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-flagship-ship',
  templateUrl: './flagship-ship.component.html',
  styleUrls: ['./flagship-ship.component.css']
})
export class FlagshipShipComponent implements OnInit {

  title = 'Etat de la flotte';

  selectedHero: DataVesselComponent;
  heroes: DataVesselComponent[];

  flee = [
    {id: 1,ipPAdress: "192.168.1.11",status:'UP',timeElapsed:12,token: 1119992882 },
    {id: 2,ipPAdress: "192.168.1.11",status:'UP',timeElapsed:12,token: 1119992882 },
    {id: 3,ipPAdress: "192.168.1.11",status:'UP',timeElapsed:12,token: 1119992882 },
    {id: 4,ipPAdress: "192.168.1.11",status:'UP',timeElapsed:12,token: 1119992882 },
    {id: 5,ipPAdress: "192.168.1.11",status:'UP',timeElapsed:12,token: 1119992882 }
  ];

  constructor(private _data: DataService) { }

  

ngOnInit() {
    
  }

@Input() vessel;
  
  onSelect(sat): void {
    vessel = sat;
   
}

clearMessage(): void {
    // clear message
    this._data.clearMessage();
}



}
