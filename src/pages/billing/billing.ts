import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Personas } from '../../providers';
import { Persona } from '../../models/persona';

@IonicPage()
@Component({
  selector: 'page-billing',
  templateUrl: 'billing.html',
})
export class BillingPage {
persona: any;
  currentPersonas: Persona[];

  constructor(public navCtrl: NavController, navParams: NavParams, public personas: Personas) {
  this.persona = navParams.get('persona') || personas.defaultPersona;
  this.currentPersonas = this.personas.query();
  }

  OpenHistory(){
      this.navCtrl.push('ContentPage');
    }

}
