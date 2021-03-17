import React, { useState } from "react";
import { connect } from "react-redux";

import { todoActions } from "../../stores/todo/actions";

const mapDispatchToProps = {
  addNewTodo: todoActions.addNewTodo,
};

const NewTodo = ({ addNewTodo }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    const textTrimmed = text.trim();
    if (textTrimmed.length === 0) return;
    addNewTodo(textTrimmed);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(NewTodo);
