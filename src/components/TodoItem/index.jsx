import React from "react";
import styles from "./styles.module.css";

const TodoItem = ({ id, text, completed, toggleCompleted }) => {
  const handdleCheckboxClicked = () => {
    toggleCompleted(id);
  };

  return (
    <div className={styles["container"]}>
      <input
        id={id}
        className={styles["checkbox"]}
        type="checkbox"
        onChange={handdleCheckboxClicked}
        checked={completed}
      />
      <label htmlFor={id} className={completed ? styles["text-checked"] : ""}>
        {text}
      </label>
    </div>
  );
};

export default TodoItem;
