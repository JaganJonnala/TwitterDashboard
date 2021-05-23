import { AnalyticsComponent } from './analytics/analytics.component';
import { PostViewsComponent } from './post-views/post-views.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureListComponent } from './feature-list/feature-list.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureListComponent,
    data: { title: 'anms.menu.features' }
  },
  {
    path: 'recent-posts',
    component: RecentPostsComponent,
    data: { title: 'Recent Posts' }
  },
  {
    path: 'post-views',
    component: PostViewsComponent,
    data: { title: 'Post Views' }
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    data: { title: 'Analytics dashboard' }
  },
  {
    path: 'stories',
    component: StoriesComponent,
    data: { title: 'Stories' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureListRoutingModule {}
