import { Component } from '@angular/core';
import { Record, RecordsService } from '../records.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  videos : Record[] = [];

  constructor(private recordService : RecordsService, private router : Router){
    this.videos = recordService.records;
  }

  openVideo(video : Record){
    this.recordService.selectedRecord = video;
    this.router.navigateByUrl("video");
  }
}
