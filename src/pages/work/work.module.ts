import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { WorkPage } from './work';

@NgModule({
  declarations: [
    WorkPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkPage),
    TranslateModule.forChild()
  ],
  exports: [
    WorkPage
   ]
})
export class WorkPageModule {}
