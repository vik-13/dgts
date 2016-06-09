import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DgtsAppComponent } from '../app/dgts.component';

beforeEachProviders(() => [DgtsAppComponent]);

describe('App: Dgts', () => {
  it('should create the app',
      inject([DgtsAppComponent], (app: DgtsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'dgts works!\'',
      inject([DgtsAppComponent], (app: DgtsAppComponent) => {
    expect(app.title).toEqual('dgts works!');
  }));
});
