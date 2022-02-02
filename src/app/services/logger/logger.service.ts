import { Injectable } from '@angular/core';

// this is also a service but note that we do not have a contracting abstract class
// therefore the component references the specific LoggerService directly
// this should not be done in practice because it violates the open-closed principle.
// Have a look at the CounterService to see the best practice.

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() { }

  log(mode: "debug" | "info" | "warning" | "error", message: string): void {
    let color;
    switch (mode) {
      case "debug":
        color = "color: black;";
        break;
      case "info":
        color = "color: yellow;";
        break;
      case "warning":
        color = "color: orange;";
        break;
      case "error":
        color = "color: red;";
        break;
      case "debug":
      default:
        color = "color: black;";
        break;
    }
    
    message = "%c" + message;

    console.log(message, color);
  }
}
