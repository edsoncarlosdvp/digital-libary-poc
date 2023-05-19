import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibaryRoutingModule } from './libary-routing.module';
import { LibaryComponent } from './libary/libary.component';
import { AppMaterialImportsModule } from 'src/shared/app-material-imports/app-material-imports.module';

@NgModule({
  declarations: [LibaryComponent],
  imports: [CommonModule, LibaryRoutingModule, AppMaterialImportsModule],
})
export class LibaryModule {}
