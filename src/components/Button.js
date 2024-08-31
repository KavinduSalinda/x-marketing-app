import React from "react";

function Button({ 
  text='Button', 
  onClick ,
  className = ""
}) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
