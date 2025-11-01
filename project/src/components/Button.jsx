import React from 'react'

const Button = (props) => {
  const onClick = () => {
    document.body.style.backgroundColor = props.name;
  };

  return (
    <>
      <button onClick={onClick}>{props.name}</button>
    </>
  );
};

export default Button;
