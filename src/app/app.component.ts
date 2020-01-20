import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  password = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  onButtonClick() {
    console.log(`
      Generate password:
      Letters: ${this.includeLetters}
      Numbers: ${this.includeNumbers}
      Symbols: ${this.includeSymbols}
    `);
    this.password = "my password";
  }
  onChangeIncludeLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeIncludeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeIncludeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeLength(value: string) {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
