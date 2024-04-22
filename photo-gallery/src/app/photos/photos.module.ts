import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotosPage } from './photos.page';

import { PhotosPageRoutingModule } from './photos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PhotosPageRoutingModule
  ],
  declarations: [PhotosPage]
})
export class PhotosPageModule {}
