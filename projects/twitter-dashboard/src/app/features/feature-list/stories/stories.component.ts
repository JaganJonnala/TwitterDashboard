import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { storyItems } from '../feature-list.data';
import * as pubsub from '../pubsub';

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class StoriesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  items: any = storyItems;
  selectedItem :any = {};
  progress : any = 10;
  progressBarInterval:any;
  currentStatusImg: any;
  selectedStory: any;
  currentStoryIndex: number;
  prev="<";
  next=">";
  btnPClass: string = "dbtn";
  btnNClass: string = "dbtn";
  isLoading:boolean=true;
  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(() =>{
      this.isLoading = false;
      this.items = this.items.map((item,index) =>{
        item.isActive = index === 0 ? true :false;
        item.index = index;
        return item;
      });
      this.selectedItem = this.items[0] || {};
  
      this.selectedStory = this.selectedItem.stories[0] || {};
      this.currentStoryIndex = 0;
      setTimeout(() =>{
        this.progressBarShow();
      },500);
      pubsub.subscribe("doNextStatusAction", ()=>{
        this.nextBtnAction();
      });
    },3000);
  }

  updateProgressCount(){
    this.progress = this.progress + 5;
  }

  nextBtnAction(){
    this.selectedStory = this.items[this.selectedItem.index].stories[this.currentStoryIndex+1];
    this.currentStoryIndex++;
    if(!this.selectedStory){
      if(this.items[this.selectedItem.index+1]){
        this.makeAllInActive();
        this.selectedItem = this.items[this.selectedItem.index+1];
        this.selectedItem.isActive = true;
        this.selectedStory = this.selectedItem.stories[0] || {};
        this.currentStoryIndex = 0;
      }
      else{
        this.makeAllInActive();
        return;
      }
    }
    this.progressBarShow();
  }

  makeAllInActive(){
    this.items.forEach((item) =>{
      item.isActive =false;
    });
  }

  prevBtnAction(){
    this.selectedStory = this.items[this.selectedItem.index].stories[this.currentStoryIndex-1];
    this.currentStoryIndex--;
    if(!this.selectedStory){
      this.makeAllInActive();
      this.selectedItem = this.items[this.selectedItem.index-1];
      this.selectedItem.isActive = true;
      this.selectedStory = this.selectedItem.stories[0] || {};
      this.currentStoryIndex = 0;
    }
    this.progressBarShow();
  }

  statusClick(item){
      this.makeAllInActive();
      this.selectedItem = item;
      this.selectedItem.isActive = true;
      this.selectedStory = this.selectedItem.stories[0] || {};
      this.currentStoryIndex = 0;
      setTimeout(() =>{
        this.progressBarShow();
      });
    }

  progressBarShow(){
    this.clearAllIntervals();
    
    var progressCount = 0;
    if (progressCount == 0) {
      progressCount = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 45);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          progressCount = 0;
          pubsub.publish("doNextStatusAction","");
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }

  closeStories(){
    this.clearAllIntervals();
    this.selectedStory = undefined;
    this.makeAllInActive();
  }

  back(){
    this.router.navigate(['/twitter-dashboard']);
  }

  ngOnDestroy(){
    this.clearAllIntervals();
  }

  clearAllIntervals(){
    var interval_id = window.setInterval(()=>{}, 99999);
    for (var i = 0; i < interval_id; i++)
    window.clearInterval(i);
  }
}
