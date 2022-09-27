import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
  inject([CalculadoraService], (service: CalculadoraService) =>  {
    let soma = service.calcular(
      {
        num1: 1,
        num2: 4,
        operacao: CalculadoraService.SOMA
      });
    expect(soma).toEqual(5);
  }));

  it('deve garantir que 1 - 4 = -3',
  inject([CalculadoraService], (service: CalculadoraService) =>  {
    let soma = service.calcular(
      {
        num1: 1,
        num2: 4,
        operacao: CalculadoraService.SUBSTRACAO
      });
    expect(soma).toEqual(-3);
  }));

  it('deve garantir que 1 * 4 = 4',
  inject([CalculadoraService], (service: CalculadoraService) =>  {
    let soma = service.calcular(
      {
        num1: 1,
        num2: 4,
        operacao: CalculadoraService.MULTIPLICACAO
      });
    expect(soma).toEqual(4);
  }));

  it('deve garantir que 4/2 = 2',
  inject([CalculadoraService], (service: CalculadoraService) =>  {
    let soma = service.calcular(
      {
        num1: 4,
        num2: 2,
        operacao: CalculadoraService.DIVISAO
      });
    expect(soma).toEqual(2);
  }));

});
