# Typescript & React Hooks
* useState, useReducer, useRef 사용하기.



## 참고
[velopert](https://velog.io/@velopert/using-hooks-with-typescript)



## useState 사용시 타입 정의
* 제네릭을 사용하지 않아도 타입 유추를 한다.
```typescript
const [count, setCount] = useState<number>(0);
```

* 사실 타입을 표기하지 않아도 무관하다.
```typescript
const [count, setCount] = useState(0);

```
* 제네릭을 사용하면 좋을 때는 다음과 같이 null 이거나 혹은 아닐때 사용하면 좋다.
```typescript
type Information = { name: string, description: string };
const [info, setInformation] = useState<Information | null>(null);
```

* 혹은 상태의 타입이 까다로운 구조를 가진 객체이거나 배열일 때는 제네릭을 명시하는 것이 좋다.
```typescript
type Todo = { id: number; text: string; done: boolean };
const [todos, setTodos] = useState<Todo[]>([]);
```

* 배열일 경우도 빈 배열만 넣을 경우는 배열이 어떤 타입으로 이루어져 있는지 알수 없으므로 명시하는 것이 좋다.
```typescript
type Todo = { id: number; text: string; done: boolean };
const [todos, setTodos] = useState<Todo[]>([]);
```



## useRef

* **용도**
   * 리액트 컴포넌트 내에서 외부 라이브러리의 인스턴스 혹은 DOM을 특정 값안에 담을 때 사용
   * 단, 이 값은 랜더링과 관계가 없어야 한다.

* **변수값 관리하기**
```typescript
const id = useRef<number>(0);
const increaseId = () => {
  id.current += 1;
}
```

* **DOM 관리하기**
   * 초기값은 `null` 로 설정.
   * 사용전 `ref.current`의 값을 사용하려면 `null`을 체킹 해줘야 한다.
   * `./src/MyForm.tsx` 참고.
```typescript
import React, { useRef } from 'react';
//...
const inputRef = useRef<HTMLInputElement>(null);
//...
return (
  <>
    //...
    <input name="name" value={name} onChange={onChange} ref={inputRef} />
    //...
  </>
)
```