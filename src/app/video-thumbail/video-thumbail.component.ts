import { Component, Input } from '@angular/core';
import { Record, RecordsService } from '../records.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-thumbail',
  templateUrl: './video-thumbail.component.html',
  styleUrls: ['./video-thumbail.component.scss']
})
export class VideoThumbailComponent {
  @Input() record! : Record;
  constructor(private recordService : RecordsService, private router : Router)
  {
  }

  openVideo(video : Record){
    this.recordService.selectedRecord = video;
    this.router.navigateByUrl('video');
  }


  
}
