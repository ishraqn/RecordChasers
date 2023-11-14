import { Component } from '@angular/core';
import { Record, RecordsService } from '../records.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  video: Record | undefined;

  constructor(private recordService : RecordsService){
    this.video = recordService.selectedRecord;
  }
}
