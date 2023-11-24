import { Component, ViewEncapsulation } from '@angular/core';
import { Comment, Record, RecordsService, User } from '../records.service';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  video: Record | undefined;
  selectedUser : User | undefined;
  videos: Record[] = [];
  commentForm: FormGroup;

  constructor(private recordService : RecordsService, private router: Router){
    this.video = recordService.selectedRecord;
    this.videos = recordService.records;
    this.selectedUser = recordService.selectedUser;

    this.commentForm = new FormGroup({
      comment: new FormControl('', [Validators.required, Validators.maxLength(200)])
    });
  }

  openVideo(video : Record){
    this.recordService.selectedRecord = video;
    this.video = video;
    this.router.navigateByUrl("video");
  }

  like(video: Record | undefined){
    if(video) video.likes++;
  }

  dislike(video: Record | undefined){
    if(video) video.dislikes++;
  }

  onSubmit(){
    if(this.video && this.selectedUser) this.video.comments.push({user: this.selectedUser, comment: this.commentForm.value.comment});
  }
}
