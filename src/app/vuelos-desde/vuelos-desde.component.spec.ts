import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { VuelosDesdeComponent } from './vuelos-desde.component';

describe('vuelos-desde', () => {
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
      VuelosDesdeComponent
    ]
  }));

  it('should log ngOnInit', inject([VuelosDesdeComponent], (vuelosDesde: VuelosDesdeComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    vuelosDesde.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
