/** =====================================
 * Reducer을 사용한 Counter
 ===================================== */
import React, { useReducer } from 'react';

// ===== type 정의
// 액션을 | 을 이용해 쭉 나열한다.
type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

// ===== 리듀서 정의
function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;

    case 'DECREASE':
      return state - 1;

    default:
      throw new Error('Unhandled action');
  }
}

// ===== 컴포넌트
function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });
  return (
    <div>
      <h1>{count}</h1>
      <h2>리듀서 카운터</h2>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}

export default ReducerCounter;