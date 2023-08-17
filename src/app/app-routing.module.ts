import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/status-page/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/home-page/home-page.module')
    .then(m => m.HomePageModule)
  },
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
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
  /*
  {
    path: '**',
    loadChildren: () => import('./shared/status-page/not-found/not-found.module')
    .then(m => m.NotFoundModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
