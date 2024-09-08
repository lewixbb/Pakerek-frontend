import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-remove-item-panel',
  templateUrl: './add-remove-item-panel.component.html',
  styleUrls: ['./add-remove-item-panel.component.scss'],
})
export class AddRemoveItemPanelComponent {
  @Input() quantity = 1;
  @Input() limitedQuantity = 0;
  @Input() breakLine = false;
  @Output() quantityFeedback = new EventEmitter<number>();

  addPiece() {
    if (this.quantity < this.limitedQuantity) {
      this.quantity = this.quantity + 1;
      this.quantityFeedback.emit(this.quantity);
    }
  }

  subtractPiece() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
      this.quantityFeedback.emit(this.quantity);
    }
  }
}
