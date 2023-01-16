import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      name: "Avocat",
      price: 18
    },
    {
      name: "Citron",
      price: 29
    },
    {
      name: "Tomate",
      price: 60
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
