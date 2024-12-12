import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';
import { CommonModule, CurrencyPipe } from '@angular/common';  // Importa CommonModule y CurrencyPipe
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],  // Agrega CommonModule a los imports
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  providers: [CurrencyPipe]  // Asegúrate de agregar CurrencyPipe en los providers
})
export class ProductCardComponent {

  @Input() product!: Product; // Recibe el producto desde el componente padre
  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter(); // Emite el producto cuando cambie
  constructor(private productService: ProductService) { }

  // Método para alternar el estado de favorito
  toggleFavorite() {
    this.productService.toggleFavorite(this.product);  // Usamos el servicio para cambiar el estado
  }
  // Método para agregar el producto al carro
  onAddItem(product: Product) {
    this.productEventEmitter.emit(product);
  }
  

}
