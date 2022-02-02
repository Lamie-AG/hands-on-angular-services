import { Injectable } from '@angular/core';
import { CounterService } from './counter.service.model';

// you should always make an abstract class for service acting as a contract and therefore keeping the Open-Closed-Principle in mind.
// in this example the SpecialCounterService implements the abstract CounterService
// the component using this service is only referencing the abstract CounterService
// but we need to tell angular that we want to use the SpecialCounterService
// we do that by adding "providers: [{ provide: CounterService, useClass: SpecialCounterService}]" in the App Module

@Injectable({
  providedIn: 'root'
})
export class SpecialCounterService implements CounterService{
  counter: number = 0;

  constructor() { }

  incrementCounter(): void {
    this.counter++;
  }
}
