import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

	@ViewChild('map') mapElement;
	map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
  	this.initMap();
  }

  initMap(){
  	let latLng = new google.maps.LatLng(19.3518816, -99.1715772);

  	let mapOptions = {
  		center: latLng,
  		zoom: 15,
  		mapTypeId: google.maps.MapTypeId.ROADMAP
  	};

  	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
