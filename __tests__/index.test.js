// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код тестов/функции, запуская проверки заново

import tempoMinimoDePreparo from '../src/index.js';

describe('Miojo de 3 minutos', () => {
  test('deve ficar pronto em 7 minutos com apulhetas de 4min e 7min', () => {
    expect(tempoMinimoDePreparo(3, [4, 7])).toEqual(7);
  });

  test('deve ficar pronto em 8 minutos com apulhetas de 4min e 5min', () => {
    expect(tempoMinimoDePreparo(3, [4, 5])).toEqual(8);
  });

  test('deve retornar false com apulhetas de 4min e 4min', () => {
    expect(tempoMinimoDePreparo(3, [4, 4])).toBe(false);
  });

  test('deve ficar pronto em 10 minutos com apulhetas de 5min e 7min', () => {
    expect(tempoMinimoDePreparo(3, [5, 7])).toEqual(10);
  });
})

