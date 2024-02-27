import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/components/containers/main/main.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RangeViewerComponent } from './main/components/features/range-viewer/range-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RangeViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
