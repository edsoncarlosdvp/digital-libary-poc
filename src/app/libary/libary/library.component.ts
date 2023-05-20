import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LibraryService } from 'src/app/services/library.service';
import { ILibrary } from '../library.interface';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  library: Observable<ILibrary[]>;

  constructor(private libraryService: LibraryService) {
    this.library = this.libraryService.list();
  }

  ngOnInit(): void {}
}
