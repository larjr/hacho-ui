import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoToolsComponent } from './video-tools.component';

const routes: Routes = [
  {path: '', component: VideoToolsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoToolsRoutingModule { }
