import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";

  onButtonClick() {
    this.password = "YOUR PASSWORD";
  }
  onChangeUseLetters() {
    console.log(this.includeLetters);
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    console.log(this.includeNumbers);
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    console.log(this.includeSymbols);
    this.includeSymbols = !this.includeSymbols;
  }
}
