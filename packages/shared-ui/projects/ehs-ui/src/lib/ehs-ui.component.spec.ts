import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsUiComponent } from './ehs-ui.component';

describe('EhsUiComponent', () => {
  let component: EhsUiComponent;
  let fixture: ComponentFixture<EhsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EhsUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EhsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
