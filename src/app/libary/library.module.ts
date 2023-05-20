import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryComponent } from './libary/library.component';
import { AppMaterialImportsModule } from 'src/shared/app-material-imports/app-material-imports.module';
import { LibraryRoutingModule } from './library-routing.module';

@NgModule({
  declarations: [LibraryComponent],
  imports: [CommonModule, LibraryRoutingModule, AppMaterialImportsModule],
})
export class LibraryModule {}
