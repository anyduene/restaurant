import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  inputDishName: string = '';
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();
  
  onButtonClick() {
    this.inputValueChange.emit(this.inputDishName);
  }
}