import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Queryoptions } from '../../assets/data';
import { DataFinder } from '../../providers/datafinder';
import { Personas } from '../../providers';
import { Persona } from '../../models/persona';

@IonicPage()
@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage {
	persona: any;
	personasJSON: [];

  constructor(public navCtrl: NavController, navParams: NavParams, private dataFinder : DataFinder, public modalCtrl: ModalController, public personas: Personas) {
    this.persona = navParams.get('persona') || personas.defaultPersona;
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      })
  }

  SetQueryOptionsData(data : any){
    this.personasJSON = data.personasJSON;
  }

  openPersona(persona: Persona) {
    this.navCtrl.push('WorkPage', {
      persona: persona
    });
  }

  OpenHistory(){
    this.navCtrl.push('ContentPage');
    }

  OpenService(){
    this.navCtrl.push('CardsPage');
    }
}
