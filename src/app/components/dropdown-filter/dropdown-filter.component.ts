import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent {
  showOptions = false;

  @Input() placeholder: string;
  @Input() values: string[];
  @Input() value?: string;

  @Output() valueChange: EventEmitter<string> = new EventEmitter()

  select(value: string) {
    this.valueChange.emit(value);
    this.toggleShowOptions();
    this.placeholder = value === 'None' ? 'Filter by Region' : value;
  }

  toggleShowOptions() {
    this.showOptions = !this.showOptions;
  }
}
