import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogComponent } from './dialog/dialog.component';

import { TabsService } from './services/tabs.service';
import { SnippetsService } from './services/snippets.service';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DialogComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [
    TabsService,
    SnippetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
