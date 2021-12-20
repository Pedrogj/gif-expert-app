import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setImputValue] = useState("");

  const handleInputChange = (e) => {
    setImputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((el) => [...el, inputValue]);
      setImputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

export default AddCategory;

AddCategory.protoTypes = {
  setCategories: PropTypes.func.isRequired,
};
