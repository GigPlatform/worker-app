import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Queryoptions } from '../../assets/data';
import { Persona } from '../../models/persona';
import { Personas } from '../../providers';
import { DataFinder } from '../../providers/datafinder';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  personasJSON: [];
  workerJSON: [];

  constructor(public navCtrl: NavController, private dataFinder : DataFinder, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      })
  }

  SetQueryOptionsData(data : any){
    this.personasJSON = data.personasJSON;
    this.workerJSON = data.workerJSON;
  }

  openPersona(persona: Persona) {
    this.navCtrl.push('WorkPage', {
      persona: persona
    });
  }

  OpenHistory(){
    this.navCtrl.push('ContentPage');
  }

  OpenProfile(){
    this.navCtrl.push('ItemdetailPage');
  }
}
