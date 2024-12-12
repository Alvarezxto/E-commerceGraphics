import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCarroComponent } from './components/app-carro/app-carro.component';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { Product } from './model/product';
import { ProductService } from './services/product.service';
import { FavoritesComponent } from './favorites/favorites.component';  // Importar el componente de favoritos

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppCarroComponent, CommonModule, FavoritesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CurrencyPipe]  // Asegúrate de agregar CurrencyPipe aquí

})
export class AppComponent {
  title = 'angularCarrito';
  products: Product[] = [];
  favoriteProducts: Product[] = [];


  
  constructor(private productService: ProductService) {
    this.products = this.productService.findAll();  // Obtén todos los productos del servicio
  }

}
