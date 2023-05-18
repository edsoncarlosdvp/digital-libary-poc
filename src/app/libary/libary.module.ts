import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { LibaryRoutingModule } from './libary-routing.module';
import { LibaryComponent } from './libary/libary.component';

@NgModule({
  declarations: [LibaryComponent],
  imports: [CommonModule, LibaryRoutingModule, MatCardModule],
})
export class LibaryModule {}
