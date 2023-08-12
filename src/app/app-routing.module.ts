import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'youtube',
  loadChildren: () => import('./feature/youtube/youtube.module')
  .then(m => m.YoutubeModule)
},
{
  path: 'video-tools',
  loadChildren: () => import('./feature/video-tools/video-tools.module')
  .then(m => m.VideoToolsModule)
},
{
  path: 'podcast-dex',
  loadChildren: () => import('./feature/podcast-dex/podcast-dex.module')
  .then(m => m.PodcastDexModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
