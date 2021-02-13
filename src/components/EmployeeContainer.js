import React, { Component } from "react";
import SearchForm from "./SearchForm"
import API from "../utils/API";
import Header from "./Header";
import EmployeeList from "./EmployeeList";

class EmployeeContainer extends Component {
  state = {
    search: '',
    results: [],
    sort: {
      column: null,
      direction: 'desc',
    }
  }

  componentDidMount() {
    API.search()
      .then(res => {
        console.log(res)
        this.setState({ results: res.data.results })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  sortFunction = (column) => {
    let sortDirection = this.state.sort.direction;
    sortDirection = sortDirection === "desc" ? "asc" : "desc";
    const sortResult = this.state.results.sort((a, b) => {
      switch (column) {
        case "Name":
          const nameA = a.name.first.toLowerCase();
          const nameB = b.name.first.toLowerCase();

          if (nameA > nameB) return -1;

          if (nameB > nameA) return 1;

          return 0;
        case "Email":
          const emailA = a.email.toLowerCase();
          const emailB = a.email.toLowerCase();
          if (emailA > emailB) return -1;
          if (emailB > emailA) return 1;
          break;
        default:
      }
    });

    if (sortDirection === "desc") {
      sortResult.reverse();
    }
    this.setState({
      results: sortResult,
      sort: {
        column: column,
        direction: sortDirection,
      }
    })
  }
  render() {
    const lowCase = this.state.search.toLowerCase();
    const searchResult = this.state.results.filter(name => name.name.first.concat(name.name.last).toLowerCase().includes(lowCase));
    return (
      <div>
        <Header
          heading="Employee Finder"
          subheading="Use search box to seacrh for employe or use arrows to sort results" />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList
          sortFunction={this.sortFunction}
          results={searchResult}
        />
      </div>


    );
  }

}

export default EmployeeContainer;