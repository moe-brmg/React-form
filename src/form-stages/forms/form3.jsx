import React, { useState } from "react";

function form1(props) {
  const errors = props.errors;

  return (
    <div className="form-stage">
      <h1>Add your items please</h1>
      <p>this is the final step</p>
      <label htmlFor="itemInput">Add Items:</label>
      <input
        type="text"
        name="itemInput"
        onChange={props.handleItemOnChange}
        value={props.item}
      />
      <ul>
        {props.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <input type="submit" onClick={props.handleAddItem} value="Add Item" />
    </div>
  );
}

export default form1;
