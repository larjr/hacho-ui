import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusPageModule } from './status-page.module';
import { StatusPageComponent } from './status-page.component';

const routes: Routes = [
  {path: '', component: StatusPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusPageRoutingModule { }
