import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  password = "";
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  onButtonClick() {
    const letters = "abcdefghigklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "$#$%*^&(#$(*&(^";

    let validChars = "";
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = "";
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
  onIncludeLettersChange() {
    this.includeLetters = !this.includeLetters;
  }
  onIncludeNumbersChange() {
    this.includeNumbers = !this.includeNumbers;
  }
  onIncludeSymbolsChange() {
    this.includeSymbols = !this.includeSymbols;
  }
  onEnterLengthChange(value: string) {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
