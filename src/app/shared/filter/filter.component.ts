import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() searchName = '';
  @Input() showOnlySale = false;

  @Output() filter = new EventEmitter<string>();
  @Output() onlySale = new EventEmitter<boolean>();

  onFilter() {
    this.filter.emit(this.searchName);
  }

  onOnlySaleChange() {
    this.onlySale.emit(this.showOnlySale);
  }
}