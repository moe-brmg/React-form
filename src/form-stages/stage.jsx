import React from "react";
import Form1 from "./forms/form1";
import Form2 from "./forms/form2";
import Form3 from "./forms/form3";

function stage(props) {
  switch (props.page) {
    case 1:
      return (
        <Form1
          handleChange={props.handleChange}
          errors={props.errors}
          fields={props.fields}
        />
      );

    case 2:
      return (
        <Form2
          handleChange={props.handleChange}
          errors={props.errors}
          fields={props.fields}
        />
      );

    case 3:
      return (
        <Form3
          handleChange={props.handleChange}
          errors={props.errors}
          handleItemOnChange={props.handleItemOnChange}
          handleAddItem={props.handleAddItem}
          item={props.item}
          items={props.items}
        />
      );

    default:
      return "";
  }
}

export default stage;
