import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Personas } from '../../providers';
import { Persona } from '../../models/persona';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
	persona: any;
  	currentPersonas: Persona[];

	@ViewChild('map') mapElement;
	map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public personas: Personas) {
    this.currentPersonas = this.personas.query();
  }

    OpenHistory(){
      this.navCtrl.push('ContentPage');
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

  openPersona(persona: Persona) {
    this.navCtrl.push('WorkPage', {
      persona: persona
    });
  }

}
