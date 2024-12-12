import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Lista de productos
  private products: Product[] = [
    { id: 1, name: 'Producto 1', description: 'Descripción 1', price: 100, imageUrl: 'https://th.bing.com/th/id/R.4553fbd2712e306bbce18a01525bfbb4?rik=RDVU6HlBvU8nfg&riu=http%3a%2f%2fi11b.3djuegos.com%2fjuegos%2f2264%2f_hardware_%2ffotos%2fmaestras%2f_hardware_-2429773.jpg&ehk=h3UNtuhXENmPCD8YU3AUtcXzprs%2bDCxZsO5noSZO%2frw%3d&risl=&pid=ImgRaw&r=0', isFavorite: false },
    { id: 2, name: 'Producto 2', description: 'Descripción 2', price: 200, imageUrl: 'https://m.media-amazon.com/images/I/61NBYjujQ-L._AC_SL1500_.jpg', isFavorite: false },
    { id: 3, name: 'Producto 3', description: 'Descripción 3', price: 150, imageUrl: 'https://portatilestop.com/wp-content/uploads/2019/11/tarjeta-grafica.jpg', isFavorite: false },
    // Agrega más productos si es necesario
  ];

  // Lista de productos favoritos
  private favoriteProducts: Product[] = [];

  constructor() {}
  // Método para obtener todos los productos
  findAll(): Product[] {
    return this.products;
  }


  // Método para obtener solo los productos favoritos
  getFavoriteProducts(): Product[] {
    console.log("Productos favoritos:", this.favoriteProducts) 
    return this.favoriteProducts;
  }

  // Método para alternar el estado de favorito
  toggleFavorite(product: Product): void {
    product.isFavorite = !product.isFavorite;

    // Si el producto es marcado como favorito, lo agrega a la lista de favoritos
    if (product.isFavorite) {
      this.favoriteProducts.push(product);
      console.log("Productos favoritos:", this.favoriteProducts) 
    } else {
      // Si el producto es desmarcado como favorito, lo elimina de la lista de favoritos
      const index = this.favoriteProducts.indexOf(product);
      if (index > -1) {
        this.favoriteProducts.splice(index, 1);
      }
    }
    
  }
}
