import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {


  categoria: String[] = ["COMPUTADORES", "PEÇAS", "VIDEO GAMES", "PERIFERICOS", "LIVROS"]
}
