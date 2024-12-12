import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../model/cartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Input() items: CartItem[]=[];
  @Input() total=0;

  @Output() idProductEventEmiter = new EventEmitter();

  onDeleteCart(id: number) {
    this.idProductEventEmiter.emit(id);

  }

}