import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibaryComponent } from './libary/libary.component';

const routes: Routes = [{ path: '', component: LibaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibaryRoutingModule {}
