import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Persona } from '../../models/persona';
import { Personas } from '../../providers';
import { DataFinder } from '../../providers/datafinder';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
	personasJSON: any[];
  activeJSON: any[];
  pendingJSON: any[];
  completedJSON: any[];
  canceledJSON: any[];
  suggestionsJSON: any[];
  history: string = "Active";

  constructor(public navCtrl: NavController, public personas: Personas, private dataFinder : DataFinder, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      })
  }

  SetQueryOptionsData(data : any){
    this.personasJSON = data.personasJSON;
    this.activeJSON = data.activeJSON;
    this.pendingJSON = data.pendingJSON;
    this.completedJSON = data.completedJSON;
    this.canceledJSON = data.canceledJSON;
    this.suggestionsJSON = data.suggestionsJSON;
  }

openPersona(persona: Persona) {
    this.navCtrl.push('WorkPage', {
      persona: persona
    });
  }
}
