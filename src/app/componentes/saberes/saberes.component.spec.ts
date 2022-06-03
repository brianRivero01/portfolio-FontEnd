import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaberesComponent } from './saberes.component';

describe('SaberesComponent', () => {
  let component: SaberesComponent;
  let fixture: ComponentFixture<SaberesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaberesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaberesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
