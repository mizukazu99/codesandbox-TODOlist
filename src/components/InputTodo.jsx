import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabaled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabaled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabaled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
