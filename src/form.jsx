import React, { Component } from "react";
import Stage from "./form-stages/stage";

class Form extends Component {
  state = {
    fields: { fruits: [] },
    errors: {},
    currentPage: 1,
    MaxPageNumber: 3,
    items: [],
    item: "",
  };

  handleChange = (e) => {
    let fields = { ...this.state.fields };
    fields[e.target.name] = e.target.value;
    console.log(e.target, e.target.name, e.target.value);
    this.setState({ fields });
    console.log(e.type);
  };
  handleNext = (e) => {
    e.preventDefault();
    let page = this.state.currentPage;
    page++;

    this.setState({ currentPage: page });
  };
  handlePre = (e) => {
    e.preventDefault();
    let page = this.state.currentPage;
    page--;

    this.setState({ currentPage: page });
  };
  handleItemOnChange = (e) => {
    let item = e.target.value;
    this.setState({ item });
  };
  handleAddItem = (e) => {
    e.preventDefault();
    let items = [...this.state.items];
    items.push(this.state.item);
    let item = "";
    this.setState({ items, item });
  };
  render() {
    const {
      currentPage,
      MaxPageNumber,
      errors,
      fields,
      item,
      items,
    } = this.state;
    return (
      <div className="container">
        <form>
          <Stage
            page={currentPage}
            handleChange={this.handleChange}
            errors={errors}
            fields={fields}
            handleItemOnChange={this.handleItemOnChange}
            handleAddItem={this.handleAddItem}
            item={item}
            items={items}
          />

          {currentPage > 1 ? (
            <button onClick={this.handlePre}>Previous</button>
          ) : (
            ""
          )}
          {currentPage !== MaxPageNumber ? (
            <button onClick={this.handleNext}>Next</button>
          ) : (
            <input type="submit" value="submit" />
          )}
        </form>
      </div>
    );
  }
}

export default Form;
