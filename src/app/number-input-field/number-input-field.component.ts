import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-input-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './number-input-field.component.html',
  styleUrl: './number-input-field.component.css'
})
export class NumberInputFieldComponent {
  @Input() inputFieldTitle : string = "";
  @Input() fieldName : string = "";
  @Output() numberEntered = new EventEmitter<{fieldName: string, fieldValue: number}>();
  
  fieldValue : number = 0;

  valueChanged(){
    this.numberEntered.emit({fieldName: this.fieldName, fieldValue: this.fieldValue});
  }
}
