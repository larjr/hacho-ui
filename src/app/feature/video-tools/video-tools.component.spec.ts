import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoToolsComponent } from './video-tools.component';

describe('VideoToolsComponent', () => {
  let component: VideoToolsComponent;
  let fixture: ComponentFixture<VideoToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoToolsComponent]
    });
    fixture = TestBed.createComponent(VideoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
