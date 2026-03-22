import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RemoteEntry } from './remote-entry/entry';
import { remoteRoutes } from './remote-entry/entry.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteEntry],
      providers: [provideRouter(remoteRoutes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RemoteEntry);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
