import React from "react";

const Input = ({ label, ...props }: any) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
};

export default Input;
