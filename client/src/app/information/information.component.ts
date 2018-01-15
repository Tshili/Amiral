import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { DataVesselComponent } from '../model/data-vessel/data-vessel.component';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  name:any;

  sub:any;

  constructor(private route:ActivatedRoute, private _data:DataService,  private location: Location ) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

  @Input() vessel: DataVesselComponent;

  
 

}
