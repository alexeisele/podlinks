import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class SidenavModule { }
