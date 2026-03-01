import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminImageModuleComponent} from './admin-image-module.component';

describe('AdminImageModuleComponent', () => {
  let component: AdminImageModuleComponent;
  let fixture: ComponentFixture<AdminImageModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminImageModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminImageModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
