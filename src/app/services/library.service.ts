import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { ILibrary } from '../libary/library.interface';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
<<<<<<< HEAD
  // private readonly API = 'https://localhost:5001/v1/libary';
  private readonly API = '/assets/dbLibrary.json';
=======
  private readonly API = '/src/assets/dbLibrary.json';
>>>>>>> parent of 1fcb9d6 (#03 chore: Correções nos nomes)

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<ILibrary[]>(this.API).pipe(
      first(),
      tap((data) => console.log('dados: ', data)),
    );
  }
}
