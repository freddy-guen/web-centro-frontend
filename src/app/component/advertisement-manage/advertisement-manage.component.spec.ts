import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementManageComponent } from './advertisement-manage.component';

describe('AdvertisementManageComponent', () => {
  let component: AdvertisementManageComponent;
  let fixture: ComponentFixture<AdvertisementManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisementManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertisementManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
