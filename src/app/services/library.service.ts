import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs/operators';
import { ILibrary } from '../libary/library.interface';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private readonly API = '/assets/dbLibrary.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<ILibrary[]>(this.API).pipe(
      first(),
      tap((data) => console.log('dados: ', data)),
    );
  }
}
