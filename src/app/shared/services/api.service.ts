import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  list() {
    return [
      {
        id: '1',
        name: 'Memórias Póstumas de Brás Cubas',
        author: 'Machado de Assis',
        description: 'Um livro.',
        imageUrl:
          'https://cdn.culturagenial.com/imagens/memorias-postumas-de-bras-cubas-1-cke.jpg',
      },
    ];
  }
}
