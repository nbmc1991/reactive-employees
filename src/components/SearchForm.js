import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form >
      <div className="form-group">
        <input
          value={props.value}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type a First or Last name to begin"
          id="search"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
