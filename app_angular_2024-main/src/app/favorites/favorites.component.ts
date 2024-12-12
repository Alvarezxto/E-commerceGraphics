import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class FavoritesComponent implements OnChanges {
  @Input() favoriteProducts: Product[] = [];  // La propiedad que recibirá los favoritos

  // Inyección del servicio y ChangeDetectorRef
  constructor(
    private productService: ProductService,
    private cdRef: ChangeDetectorRef
  ) {
    this.favoriteProducts = this.productService.getFavoriteProducts();  // Obtén los productos favoritos del servicio
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['favoriteProducts']) {
           // Si `favoriteProducts` ha cambiado, forza la detección de cambios
      console.log("In ")
      this.cdRef.detectChanges();
      this.favoriteProducts = this.productService.getFavoriteProducts();
    }
  }
  
}
