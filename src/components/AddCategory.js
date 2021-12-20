import React, { useState } from "react";

const AddCategory = () => {
  const [inputValue, setImputValue] = useState("");

  const handleInputChange = (e) => {
    setImputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

export default AddCategory;
