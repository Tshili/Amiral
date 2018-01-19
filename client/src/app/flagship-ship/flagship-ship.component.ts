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
  flees: DataVesselComponent[] = [];


  constructor(private _data: DataService) {
    this.flees = this._data.ships;
   }

  

ngOnInit() {
    
  }


  




}
