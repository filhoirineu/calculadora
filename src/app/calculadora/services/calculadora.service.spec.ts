import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import { inject } from '@angular/core';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService],
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 4 + 2 = 6', () => {
    let soma = service.calcular(4, 2, CalculadoraService.SOMA);
    expect(soma).toEqual(6);
  });

  it('deve garantir que 4 / 2 = 2', () => {
    let soma = service.calcular(4, 2, CalculadoraService.DIVISAO);
    expect(soma).toEqual(2);
  });

  it('deve garantir que 4 - 2 = 2', () => {
    let soma = service.calcular(4, 2, CalculadoraService.SUBSTRACAO);
    expect(soma).toEqual(2);
  });

  it('deve garantir que 4 * 2 = 8', () => {
    let soma = service.calcular(4, 2, CalculadoraService.MULTIPLICACAO);
    expect(soma).toEqual(8);
  });
});
