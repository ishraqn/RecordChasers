import { Component, ViewChild } from '@angular/core';
import { Record, RecordsService } from '../records.service';
import { Router } from '@angular/router';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomePageComponent {
  videos : Record[] = [];

  paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;
    pauseOnFocus = true;

    @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;
  constructor(private recordService : RecordsService, private router : Router){
    this.videos = recordService.records;
  }

  openVideo(video : Record){
    this.recordService.selectedRecord = video;
    this.router.navigateByUrl('video');
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
        this.unpauseOnArrow &&
        slideEvent.paused &&
        (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
       //this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
        //this.togglePaused();
    }
}
}
