import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FlagshipShipComponent } from './flagship-ship/flagship-ship.component';
import { NavComponent } from './nav/nav.component';
import { InformationComponent } from './information/information.component';
import { DataService } from './data.service';

import { DataVesselComponent } from './model/data-vessel/data-vessel.component';



const routes: Routes = [
  { path: '', component: FlagshipShipComponent },
  { path: 'vaisseauSatellite/:id', component: InformationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FlagshipShipComponent,
    NavComponent,
    InformationComponent,
    
    DataVesselComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
