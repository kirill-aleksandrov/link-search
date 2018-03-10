import { NgModule } from '@angular/core';
import { MatTabsModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
