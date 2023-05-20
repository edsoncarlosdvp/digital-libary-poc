import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialImportsModule } from 'src/shared/app-material-imports/app-material-imports.module';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [LibraryComponent],
  imports: [CommonModule, LibraryRoutingModule, AppMaterialImportsModule],
})
export class LibraryModule {}
