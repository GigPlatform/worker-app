import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { DataFinder } from '../../providers/datafinder';
import { Personas } from '../../providers';
import { Persona } from '../../models/persona';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  persona: any;
  suggestionsJSON: any[];

  constructor(public navCtrl: NavController, navParams: NavParams, public personas: Personas, private dataFinder : DataFinder, public modalCtrl: ModalController) {
    this.persona = navParams.get('persona') || personas.defaultPersona;
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      })
  }

  SetQueryOptionsData(data : any){
    this.suggestionsJSON = data.suggestionsJSON;
  }

    openPersona(persona: Persona) {
    this.navCtrl.push('WorkPage', {
      persona: persona
    });
  }

    openBilling(persona: Persona){
      this.navCtrl.push('BillingPage', {
      persona: persona
    });
  }

    openHistory(){
      this.navCtrl.push('ContentPage');
    }
  }
