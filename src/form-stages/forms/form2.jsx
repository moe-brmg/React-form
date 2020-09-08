import React from "react";

function form1(props) {
  const { errors, fields } = props;

  return (
    <div className="form-stage">
      <h1>more details</h1>
      <p>This is step two</p>
      <input
        type="text"
        name="email"
        onChange={props.handleChange}
        value={fields["email"]}
        placeholder="Email"
      />
      <div className="gender">
        <h2>Choose your Gender</h2>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          name="gender"
          onChange={props.handleChange}
          value="male"
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="female"
          name="gender"
          onChange={props.handleChange}
          value="female"
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          id="other"
          name="gender"
          onChange={props.handleChange}
          value="other"
        />
      </div>
      <div className="fruit">
        <h2>Choose your fruit</h2>
        <input
          type="checkbox"
          name="fruit"
          onChange={props.handleChange}
          value="apple"
          checked
        />
        Apple
        <input
          type="checkbox"
          name="fruit"
          onChange={props.handleChange}
          value="orange"
          checked
        />
        Orange
        <input
          type="checkbox"
          name="fruit"
          onChange={props.handleChange}
          value="banana"
          checked
        />
        Banana
      </div>
    </div>
  );
}

export default form1;
