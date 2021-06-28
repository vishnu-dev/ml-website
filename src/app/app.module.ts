import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbIconModule, NbMenuModule, NbToastrModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NgbModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
