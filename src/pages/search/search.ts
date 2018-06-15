import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/** import { Queryoptions } from '../../assets/data'; */
import { Personas } from '../../providers';
import { Persona } from '../../models/persona';
import { DataFinder } from '../../providers/datafinder';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  personasJSON: any[];
	persona: any;

	@ViewChild('map') mapElement: ElementRef;
	map: any;

  constructor(public navCtrl: NavController, private dataFinder : DataFinder, public navParams: NavParams, public geolocation: Geolocation, public modalCtrl: ModalController) {
    }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      })
    this.loadMap();
  }

  SetQueryOptionsData(data : any){
    this.personasJSON = data.personasJSON;
  }

  OpenHistory(){
    this.navCtrl.push('ContentPage');
    }

  loadMap(){
    this.geolocation.getCurrentPosition().then((position) =>{
  	let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  	let mapOptions = {
  		center: latLng,
  		zoom: 15,
  		mapTypeId: google.maps.MapTypeId.ROADMAP
  	};

  	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }, (err) => {
      console.log(err);
      });
    }
  
  openPersona(persona: Persona) {
    this.navCtrl.push('WorkPage', {
      persona: persona
    });
  }

  addMarker(){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
   
    let content = "<h4>Information!</h4>";         
   
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
  }

}
