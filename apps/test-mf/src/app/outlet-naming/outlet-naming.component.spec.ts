import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutletNamingComponent } from './outlet-naming.component';

describe('OutletNamingComponent', () => {
  let component: OutletNamingComponent;
  let fixture: ComponentFixture<OutletNamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutletNamingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OutletNamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
