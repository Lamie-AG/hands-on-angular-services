import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter/counter.service.model';
import { LoggerService } from '../services/logger/logger.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  // all services must be injected into the constructor
  constructor(public counterService: CounterService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.log("info", "Counter component initialized.");
  }

  increment(): void {
    this.counterService.incrementCounter();
    this.logger.log("info", "Counter incremented.");
  }

}
