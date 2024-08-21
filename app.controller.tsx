import {useEffect, useState} from 'react';

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
  const [expressions, setExpressions] = useState<string>('');

  const [resultOfCalc, setResultOfCalc] = useState('');

  const [hasOperator, setHasOperator] = useState(false);

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
    setExpressions('');
  }

  function result() {
    setExpressions(prevValue => String(eval(prevValue)));
  }

  function concat(fn: number | string) {
    setExpressions(prevValue => (prevValue += fn.toString()));
  }

  function verifyIfExpressionHasNumber() {
    return expressions.split('').some(expression => Number(expression));
  }

  function validateIfHasNumberInExpressions(value: string) {
    return !verifyIfExpressionHasNumber() && !Number(value);
  }

  useEffect(() => {}, [expressions]);

  function calcRootHandler(value: string) {
    const key = options.indexOf(value);

    if (key === 0) {
      clear();
      return;
    }

    if (expressions.length > 0 && key === 19) {
      result();
      return;
    }

    if (validateIfHasNumberInExpressions(value)) {
      setResultOfCalc(eval(expressions));
      return;
    }

    concat(value);
  }

  return {
    options,
    resultOfCalc,
    setResultOfCalc,
    expressions,
    setExpressions,
    buttonTextColorHandler,
    calcRootHandler,
  };
}
