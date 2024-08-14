import {useState} from 'react';

export function useAppController() {
  const [expressions, setExpressions] = useState<string>('');

  const options = [
    [
      'C',
      '()',
      '%',
      '/',
      7,
      8,
      9,
      'x',
      4,
      5,
      6,
      '-',
      1,
      2,
      3,
      '+',
      '+/-',
      0,
      ',',
      '=',
    ],
  ];

  function buttonTextColorHandler(rowIndex: number, colIndex: number) {
    if (colIndex === 0 && rowIndex === 0) {
      return 'red';
    }

    if (colIndex === 0 && rowIndex > 0) {
      return 'green';
    }

    return 'white';
  }

  function clear() {
    setExpressions('');
  }

  function result() {}

  function concat(fn: number | string) {
    setExpressions(prevValue => (prevValue += fn.toString()));
  }

  function calcRootHandler(
    rowIndex: number,
    colIndex: number,
    fn: number | string,
  ) {
    if (colIndex === 0 && rowIndex === 0) {
      clear();
      return;
    }
    concat(fn);
  }

  return {
    options,
    expressions,
    setExpressions,
    buttonTextColorHandler,
    calcRootHandler,
  };
}
