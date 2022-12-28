import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  lat: number;
  lon: number;


  constructor(public myLocation: Geolocation) {
       this.getGeolocation();
  }
  getGeolocation(){
    this.myLocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.lat=geoposition.coords.latitude;
      this.lon=geoposition.coords.longitude;
    },err=>{
      console.log(err);
    });
  }
}
