import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastDexComponent } from './podcast-dex.component';

const routes: Routes = [
  {path: '', component: PodcastDexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastDexRoutingModule { }
