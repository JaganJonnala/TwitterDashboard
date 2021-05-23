import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { dateWisePostsData } from '../feature-list.data';

@Component({
  selector: 'anms-post-views',
  templateUrl: './post-views.component.html',
  styleUrls: ['./post-views.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostViewsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  data = dateWisePostsData;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/twitter-dashboard']);
  }

}
