import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ServicePage } from './service';

@NgModule({
  declarations: [
    ServicePage,
  ],
  imports: [
    IonicPageModule.forChild(ServicePage),
    TranslateModule.forChild()
  ],
  exports: [
    ServicePage
  ]
})
export class ServicePageModule { }
