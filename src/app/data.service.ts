import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataVesselComponent } from './model/data-vessel/data-vessel.component';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class DataService {

  constructor() { }



  ships = [
    new DataVesselComponent(1,"192.168.1.11",'UP',12,1119992882 ),
    new DataVesselComponent(2,"192.168.1.50",'DWN',12,1119992333 ),
    new DataVesselComponent(3,"192.168.1.45",'UP',12,1119992882 ),
    new DataVesselComponent(4,"192.168.1.22",'DWN',12,1119992882 ),
    new DataVesselComponent(5,"192.168.1.67",'UP',12,1119992882 )
   
  ];



  getSatellite(id: number): Observable<DataVesselComponent> {
    return of(this.ships.find(hero => hero.id === id));
  }
}


