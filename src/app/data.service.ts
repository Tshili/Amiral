import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataVesselComponent } from './model/data-vessel/data-vessel.component';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  amiral_url = 'http://localhost:3000';
  getSatellites(): Observable<DataVesselComponent[]> {

    const actives: any = this.http.get(`${this.amiral_url}/fleet/active`);
    const iddling: any = this.http.get(`${this.amiral_url}/fleet/iddle`);
    const now = moment().subtract(1, 'hour');
    return Observable.forkJoin(actives, iddling)
      .map((data: [any[], any[]]) => {
        const activeSatellites = data[0];
        const iddlingSatellites = data[1];
        return activeSatellites.map(
          (s) => new DataVesselComponent(s.name, s.ip_adress, 'UP',
          moment.duration(now.diff(moment(s.date))).asMinutes().toString()
          , s.last_key)
        ).concat(iddlingSatellites.map(
          (s) => new DataVesselComponent(s.name, s.ip_adress, 'DOWN',
            moment.duration(now.diff(moment(s.date))).asMinutes().toString()
          , s.last_key)
        ));
      });
  }



  getSatellite(id: number): Observable<DataVesselComponent> {
    return Observable.create((observer) => {
      this.getSatellites().subscribe(
        satellites => observer.next(satellites.find(s => s.id === id))
      );
    });
  }
}


