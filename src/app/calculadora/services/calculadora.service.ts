/**
 * servico responsavel por executar as operacoes da calculadora
 * @author Irineu Filho <irineuacfilho@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {
  static readonly SOMA: string = '+';
  static readonly SUBSTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() {}

  /**
   * calcula o resultado de acordo com a operacao.
   *
   * @param num1 primeiro numero
   * @param num2 segundo numero
   * @param operacao operacao a ser executada
   * @returns resultado da operacao
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBSTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}
