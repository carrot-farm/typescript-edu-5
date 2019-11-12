/** =====================================
 * form에서 타입 정의
 ===================================== */
import React, { useState, useRef } from 'react';

// ===== props 타입 정의
type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

// ===== 컴포넌트
function MyForm({ onSubmit }: MyFormProps) {
  // useRef 사용
  const inputRef = useRef<HTMLInputElement>(null);
  // useState 사용
  const [form, setForm] = useState({ name: '', description: '' });
  const { name, description } = form;

  // ===== input 값 변경
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // ===== submit 이벤트
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: ''
    });
    // 엘리먼트가 없을 경우
    if (!inputRef.current) {
      return;
    }
    // input에 포커스
    inputRef.current.focus();
  };

  // ===== return
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} ref={inputRef} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  )
}

export default MyForm;