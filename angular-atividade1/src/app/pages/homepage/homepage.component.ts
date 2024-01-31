import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  productList = [
    {
      name: 'Computador',
      price: 3000,
    },
    {
      name: 'Notebook',
      price: 4500,
    },
    {
      name: 'Mouse',
      price: 200,
    },
  ];
}
