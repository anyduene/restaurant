import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  inputDishName: string = '';
  isChecked: boolean = false;
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() checkboxValueChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  onButtonClick() {
    this.inputValueChange.emit(this.inputDishName);
  }

  onButtonClickCheckbox() {
    this.checkboxValueChange.emit(this.isChecked);
  }
}