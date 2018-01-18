import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataVesselComponent } from './model/data-vessel/data-vessel.component';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class DataService {

  constructor() { }


  private subject = new Subject<any>();
 
  sendMessage(message: any) {
      this.subject.next({ text: message });
  }

  clearMessage() {
      this.subject.next();
  }


