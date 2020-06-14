import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    HttpClientModule
  ],
  providers: [ImageService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
