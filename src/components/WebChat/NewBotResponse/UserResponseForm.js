import { useRef } from "react";

import classes from "./UserResponseForm.module.css";

const UserResponseForm = (props) => {
  const messageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = messageInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterMessage(enteredValue);
    }

    messageInputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={messageInputRef} />
      <button>{props.loading ? "Sending..." : "Send"}</button>
    </form>
  );
};

export default UserResponseForm;
