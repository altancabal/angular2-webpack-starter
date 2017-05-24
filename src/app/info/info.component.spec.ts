import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { InfoComponent } from './info.component';

describe('Info', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      InfoComponent
    ]
  }));

  it('should log ngOnInit', inject([InfoComponent], (info: InfoComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    info.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
