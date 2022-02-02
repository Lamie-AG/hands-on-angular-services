import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './services/counter/counter.service.model';
import { SpecialCounterService } from './services/counter/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: CounterService, useClass: SpecialCounterService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
