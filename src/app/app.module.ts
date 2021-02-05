import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DailyUtf8Service } from 'src/services/daily-utf8.service';
import { DailyJsonService } from 'src/services/daily-json.service';
// import { DailyUtf8Service } from './daily';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    DailyUtf8Service,
    DailyJsonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
