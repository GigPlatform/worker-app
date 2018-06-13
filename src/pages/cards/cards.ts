import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Personas } from '../../providers';
import { Persona } from '../../models/persona';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  persona: any;
  currentPersonas: Persona[];

  constructor(public navCtrl: NavController, navParams: NavParams, public personas: Personas) {
    this.persona = navParams.get('persona') || personas.defaultPersona;
    this.currentPersonas = this.personas.query();
    }

    openPersona(persona: Persona) {
    this.navCtrl.push('WorkPage', {
      persona: persona
    });
  }

    OpenBilling(){
      this.navCtrl.push('BillingPage');
    }

    OpenHistory(){
      this.navCtrl.push('ContentPage');
    }
  }
