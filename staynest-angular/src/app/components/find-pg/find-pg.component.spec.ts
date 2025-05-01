import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPgComponent } from './find-pg.component';

describe('FindPgComponent', () => {
  let component: FindPgComponent;
  let fixture: ComponentFixture<FindPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindPgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
