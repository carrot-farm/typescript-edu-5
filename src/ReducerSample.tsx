/** =====================================
 * reducer sample 구현
 ===================================== */
import React, { useReducer } from 'react';

// ===== Color type 정의
type Color = 'red' | 'orange' | 'yellow';

// ===== state 타입 정의(복잡한 타입일 경우 아래와 같이 정해 준다.)
type State = {
  count: number;
  text: string;
  color: Color; // 위에서 정의한 Color 타입
  isGood: boolean;
}

// ===== action type 정의
type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

// ===== 리듀서 정의
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count, // count가 number 타입인걸 알 수 있다.
      }
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text, // text가 string 타입인걸 알 수 있다.
      }
    case 'SET_COLOR':
      return {
        ...state,
        text: action.color,
      }
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood,
      }
    default:
      throw new Error('Unhandled action');
  }
}

// ===== 컴포넌트
function ReducerSample() {
  // # state 초기값 설정
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true
  });

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 }); // count를 정의하지 않으면 에러.
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' }); // text를 정의하지 않으면 에러.
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' }); // color를 정의하지 않으면 에러.
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return (
    <div>
      <h1>ReducerSample</h1>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? 'true' : 'false'}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  )
}

export default ReducerSample;