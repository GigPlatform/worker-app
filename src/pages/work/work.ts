import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Personas } from '../../providers';
import { Persona } from '../../models/persona';

@IonicPage()
@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage {
	calendars = [];
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

  OpenHistory(){
    this.navCtrl.push('ContentPage');
    }

  OpenService(){
    this.navCtrl.push('CardsPage');
    }
}
