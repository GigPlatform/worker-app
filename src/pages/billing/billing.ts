import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { DataFinder } from '../../providers/datafinder';
import { Personas } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-billing',
  templateUrl: 'billing.html',
})
export class BillingPage {
  persona: any;
  employeeJSON: any[];


  constructor(public navCtrl: NavController, navParams: NavParams, public personas: Personas, private dataFinder : DataFinder, public modalCtrl: ModalController) {
    this.persona = navParams.get('persona') || personas.defaultPersona;
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      })
  }

  SetQueryOptionsData(data : any){
    this.employeeJSON = data.employeeJSON;
  }

  OpenHistory(){
      this.navCtrl.push('ContentPage');
    }

}
