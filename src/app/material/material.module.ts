import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatInputModule, MatTabsModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialModule {
}
