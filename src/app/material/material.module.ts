import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatTabsModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
