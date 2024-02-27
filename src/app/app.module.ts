import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/components/containers/main/main.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RangeViewerComponent } from './main/components/features/range-viewer/range-viewer.component';
import { PosTableComponent } from './main/components/features/pos-table/pos-table.component';
import { ButtonImageComponent } from './main/components/features/button-image/button-image.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RangeViewerComponent,
    PosTableComponent,
    ButtonImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
