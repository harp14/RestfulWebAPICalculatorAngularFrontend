import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalculatorService } from './services/calculator.service';
import { HttpClientModule } from '@angular/common/http';
import { OperationRadioButtonComponent } from './operation-radio-button/operation-radio-button.component';
import { NumberInputFieldComponent } from './number-input-field/number-input-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule, OperationRadioButtonComponent, NumberInputFieldComponent],
  providers: [CalculatorService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private calculatorService = inject(CalculatorService);
  
  title = 'Restful API Calculator';

  firstNumber : number = 0
  secondNumber : number = 0;
  calculationResult : number = 0;
  selectedOption: string = 'add'; // Default selected option
  
  getRequestBody(){
    return {
      "firstNumber": this.firstNumber,
      "secondNumber": this.secondNumber
    }
  }
  
  fetchData(){
    let body = this.getRequestBody();
    this.calculatorService.fetchData(this.selectedOption, body).subscribe(data => {
      this.calculationResult = data.result;
    });
  }

  onOptionSelected(option: string){
    this.selectedOption = option;
    this.fetchData();
  }

  onValueChanged(event: { fieldName : string, fieldValue : number }){
    if (event.fieldName === 'firstNumber') {
      this.firstNumber = event.fieldValue;
      this.fetchData();
    } else if (event.fieldName === 'secondNumber') {
      this.secondNumber = event.fieldValue;
      this.fetchData();
    }
  }

}
