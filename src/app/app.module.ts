import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { setTheme } from 'ngx-bootstrap/utils';
setTheme('bs4'); // or 'bs4'

@NgModule({
  imports:      [ BrowserModule, FormsModule, BsDatepickerModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
