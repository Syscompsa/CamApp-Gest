import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGraphGenComponent } from './data-graph-gen.component';

describe('DataGraphGenComponent', () => {
  let component: DataGraphGenComponent;
  let fixture: ComponentFixture<DataGraphGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGraphGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGraphGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
