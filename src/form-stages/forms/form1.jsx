import React from "react";

function form1(props) {
  const { errors, fields } = props;

  return (
    <div className="form-stage">
      <h1>CREATE YOUR ACCOUNT</h1>
      <p>This is step one</p>

      <input
        type="text"
        name="name"
        onChange={props.handleChange}
        value={fields["name"]}
        placeholder="name"
      />
      <span>{errors["name"]}</span>

      <input
        type="text"
        name="lastName"
        onChange={props.handleChange}
        value={fields["lastName"]}
        placeholder="Lastname"
      />
      <span>{errors["lastName"]}</span>

      <input
        type="text"
        name="phone"
        onChange={props.handleChange}
        value={fields["phone"]}
        placeholder="phone"
      />
      <span>{errors["phone"]}</span>
    </div>
  );
}

export default form1;
