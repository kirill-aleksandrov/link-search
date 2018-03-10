import { NgModule } from '@angular/core';
import { MatButtonModule, MatTabsModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
