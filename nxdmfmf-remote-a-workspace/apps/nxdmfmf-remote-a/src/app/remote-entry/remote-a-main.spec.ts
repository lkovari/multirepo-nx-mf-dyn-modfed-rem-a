import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoteAMain } from './remote-a-main';

describe('RemoteAMain', () => {
  let component: RemoteAMain;
  let fixture: ComponentFixture<RemoteAMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteAMain],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteAMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
