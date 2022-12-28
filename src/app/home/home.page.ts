import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

