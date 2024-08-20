import {useState} from 'react';

const options = [
  'C',
  '()',
  '%',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '+/-',
  '0',
  ',',
  '=',
];

export function useAppController() {
  const [expressions, setExpressions] = useState<string>('0');

  function buttonTextColorHandler(colIndex: number) {
    if (colIndex === 0) {
      return 'red';
    }

    if (colIndex === 0) {
      return 'green';
    }

    return 'white';
  }

  function clear() {
    setExpressions('0');
  }

  function result() {
    setExpressions(prevValue => String(eval(prevValue)));
  }

  function concat(fn: number | string) {
    setExpressions(prevValue => (prevValue += fn.toString()));
  }

  function calcRootHandler(value: string) {
    const key = options.indexOf(value)

    if (expressions.length > 0) {
      if (key === 0) {
        clear();
        return;
      }
      if (expressions.length > 0 && key === 19) {
        result();
        return;
      }
    }

    concat(value);
  }

  return {
    options,
    expressions,
    setExpressions,
    buttonTextColorHandler,
    calcRootHandler,
  };
}
