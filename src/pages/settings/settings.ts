import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { DataFinder } from '../../providers/datafinder';

export interface Config {
  technologies: string;
}

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
  switch: string = "Store";
  public config : Config;
  public columns : any;
  public rows : any;

  constructor(public navCtrl: NavController, private dataFinder : DataFinder, public modalCtrl: ModalController, private _HTTP: HttpClient) {

    this.columns = [
            { prop: 'name' },
            { name: 'Summary' },
            { name: 'Company' }
      ];
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      });

    this._HTTP
      .get<Config>('../../assets/data/technologies.json')
      .subscribe((data) =>
      {
         this.rows = data.technologies;
      });
  }

  SetQueryOptionsData(data : any){
    this.stores = data.stores;
    this.workerJSON = data.workerJSON;
    this.products = data.products;
    this.dashboard = data.dashboard;
    }

  OpenHistory(){
    this.navCtrl.push('HomePage');
  }

  OpenCancel(){
    this.navCtrl.push('HomePage');
  }

  OpenAnnouncements(){
    this.navCtrl.push('AnnouncementsPage');
  }

  OpenQuestions(){
    this.navCtrl.push('QuestionsPage');
  }
}
