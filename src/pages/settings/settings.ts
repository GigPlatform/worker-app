import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { DataFinder } from '../../providers/datafinder';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
	stores: any[];
	workerJSON: any[];
	products: any[];
	dashboard: any[];

  constructor(public navCtrl: NavController, private dataFinder : DataFinder, public modalCtrl: ModalController) {
  	this.config = "Store";
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      })
  }

  SetQueryOptionsData(data : any){
    this.stores = data.stores;
    this.workerJSON = data.workerJSON;
    this.products = data.products;
    this.dashboard = data.dashboard;
    }

}
