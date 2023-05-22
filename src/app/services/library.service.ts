import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { ILibrary } from '../library/library.interface';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private readonly API = 'https://localhost:5001/v1/library';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<ILibrary[]>(this.API).pipe(
      first(),
      tap((data) => console.log('dados: ', data)),
    );
  }
}
