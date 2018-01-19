import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs/Subscription';
import { DataVesselComponent } from '../model/data-vessel/data-vessel.component';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  @Input() satellite: DataVesselComponent;
   

  
  constructor( private _data:DataService, private route: ActivatedRoute ) {
   
   }

  ngOnInit() {
    this.getSatellite();
  }

  


  getSatellite(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._data.getSatellite(id)
      .subscribe(satellite => this.satellite = satellite);
  }

  

  
 

}
