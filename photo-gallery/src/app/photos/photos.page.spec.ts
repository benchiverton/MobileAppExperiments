import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotosPage } from './photos.page';

describe('Tab2Page', () => {
  let component: PhotosPage;
  let fixture: ComponentFixture<PhotosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
