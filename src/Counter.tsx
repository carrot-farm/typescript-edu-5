/** =====================================
 * useState 사용시 타입정의
 ===================================== */
import React, { useState } from 'react';

function Counter() {
  // useState 사용시에는 Generics를 사용하지 않아도 알아서 타입을 유추한다.
  // const [count, setCount] = useState<number>(0);
  const [count, setCount] = useState(0); // 아예 생략해도 상관없다.
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter;