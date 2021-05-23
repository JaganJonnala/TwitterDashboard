import { StoriesComponent } from './stories/stories.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PostViewsComponent } from './post-views/post-views.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureListRoutingModule } from './feature-list-routing.module';

@NgModule({
  declarations: [FeatureListComponent,PostViewsComponent,AnalyticsComponent,RecentPostsComponent,StoriesComponent],
  imports: [CommonModule, SharedModule, FeatureListRoutingModule]
})
export class FeatureListModule {}
