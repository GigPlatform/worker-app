import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Persona } from '../../models/persona';
import { Personas } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
	currentPersonas: Persona[];

  constructor(public navCtrl: NavController, public personas: Personas, public modalCtrl: ModalController) {
    this.currentPersonas = this.personas.query();
  }

openPersona(){
  this.navCtrl.push('WorkPage');
  }
}
