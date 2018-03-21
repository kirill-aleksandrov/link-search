import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';

import { TabsService } from './services/tabs.service';
import { SnippetsService } from './services/snippets.service';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DialogComponent,
    TableComponent,
    TabsComponent
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
