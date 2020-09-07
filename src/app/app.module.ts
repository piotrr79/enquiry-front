import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { EnvServiceProvider } from './env.service.provider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
