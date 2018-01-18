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

  message: any;
    subscription: Subscription;

  
  constructor( private _data:DataService ) {
    this.subscription = this._data.getMessage().subscribe(message => { this.message = message; });
   }

  ngOnInit() {
  }


  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  

  
 

}
