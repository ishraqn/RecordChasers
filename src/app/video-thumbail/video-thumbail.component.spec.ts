import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoThumbailComponent } from './video-thumbail.component';

describe('VideoThumbailComponent', () => {
  let component: VideoThumbailComponent;
  let fixture: ComponentFixture<VideoThumbailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoThumbailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoThumbailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
