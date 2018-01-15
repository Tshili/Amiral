import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataVesselComponent } from './model/data-vessel/data-vessel.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class DataService {

  constructor() { }

 

  satelliteVessel : { id : number, 
    ipPAdress : number,
    status : boolean, 
    timeElapsed: number, 
    token: number  };

    getHeroes(): Observable<DataVesselComponent[]> {
      return of(this.flee);
    }


    flee = [
      new DataVesselComponent(1,1921111,'UP',12,1119992882 ),
      new DataVesselComponent(2,1921665,'UP',5,1119992882 ),
      new DataVesselComponent(3,1921111,'DOWN',500,1119555 ),
      new DataVesselComponent(4,1921111,'UP',25,1119992882 ),
      new DataVesselComponent(5,1921111,'DOWN',455,1119992555 )
    ];

    getHero(id: number): Observable<DataVesselComponent> {
      // Todo: send the message _after_ fetching the hero
    
      return of(this.flee.find(hero => hero.id === id));
    }
    

    

}
