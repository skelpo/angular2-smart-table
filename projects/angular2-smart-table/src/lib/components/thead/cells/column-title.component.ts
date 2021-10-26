import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';

@Component({
  selector: 'angular2-st-column-title',
  template: `
    <div class="angular2-smart-title">
      <angular2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)" (hide)="hide.emit($event)"></angular2-smart-table-title>
    </div>
  `,
})
export class ColumnTitleComponent {

  @Input() column!: Column;
  @Input() source!: DataSource;

  @Output() sort = new EventEmitter<any>();
  @Output() hide = new EventEmitter<any>();

}
