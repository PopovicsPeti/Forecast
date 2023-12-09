import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { SliderComponent } from './components/slider/slider.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { DirectionPipe } from './pipes/direction.pipe';
import { IntRoundPipe } from './pipes/int-round.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    SliderComponent,
    TimeFormatPipe,
    DirectionPipe,
    IntRoundPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
