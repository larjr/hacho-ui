import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastDexComponent } from './podcast-dex.component';

describe('PodcastDexComponent', () => {
  let component: PodcastDexComponent;
  let fixture: ComponentFixture<PodcastDexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastDexComponent]
    });
    fixture = TestBed.createComponent(PodcastDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
