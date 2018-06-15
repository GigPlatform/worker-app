import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Persona } from '../../models/persona';
import { Personas } from '../../providers';
import { DataFinder } from '../../providers/datafinder';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  personasJSON: any[];
  workerJSON: any[];
  completedJSON: any[];
  suggestionsJSON: any[];

  constructor(public navCtrl: NavController, public personas: Personas, private dataFinder : DataFinder, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      })
  }

  SetQueryOptionsData(data : any){
    this.personasJSON = data.personasJSON;
    this.workerJSON = data.workerJSON;
    this.completedJSON = data.completedJSON;
    this.suggestionsJSON = data.suggestionsJSON;
  }

  openPersona(persona: Persona) {
    this.navCtrl.push('WorkPage', {
      persona: persona
    });
  }

  openHistory(){
    this.navCtrl.push('ContentPage');
  }

  openProfile(){
    this.navCtrl.push('ItemDetailPage');
  }
}
