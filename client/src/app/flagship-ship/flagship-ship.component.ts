import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataVesselComponent } from '../model/data-vessel/data-vessel.component';

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
    new DataVesselComponent(1,1921111,'UP',12,1119992882 ),
    new DataVesselComponent(2,1921665,'UP',5,1119992882 ),
    new DataVesselComponent(3,1921111,'DOWN',500,1119555 ),
    new DataVesselComponent(4,1921111,'UP',25,1119992882 ),
    new DataVesselComponent(5,1921111,'DOWN',5,1119992555 )
  ];

  constructor(private _data:DataService) { }

  

ngOnInit() {
    this.getHeroes();
  }


  onSelect(hero: DataVesselComponent): void {
    this.selectedHero = hero;
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._data.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}
