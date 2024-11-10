import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operation-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './operation-radio-button.component.html',
  styleUrl: './operation-radio-button.component.css'
})

export class OperationRadioButtonComponent {
  
  selectedOption: string = 'add'; // Default selected option
  @Output() optionSelected = new EventEmitter<string>();

  selectOption(option: string) {
    this.selectedOption = option;
    this.optionSelected.emit(option);
  }
}
