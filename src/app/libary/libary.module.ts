import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibaryRoutingModule } from './libary-routing.module';
import { LibaryComponent } from './libary/libary.component';

@NgModule({
  declarations: [LibaryComponent],
  imports: [CommonModule, LibaryRoutingModule],
})
export class LibaryModule {}
