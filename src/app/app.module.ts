import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LimitToPipe } from './limit-to.pipe';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  imports:[ 
    BrowserModule,
    FormsModule,
    MatIconModule,
        MatListModule,
        MatSelectModule,
        MatSliderModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatCardModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule, MatNativeDateModule,
        MatDatepickerModule ],
  declarations: [ AppComponent, HelloComponent, LimitToPipe ],
  bootstrap:    [ AppComponent ],
  providers: [  
    MatDatepickerModule,  
  ],
})
export class AppModule { }
