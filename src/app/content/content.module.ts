import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ContentComponent } from './content.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class ContentModule { }
