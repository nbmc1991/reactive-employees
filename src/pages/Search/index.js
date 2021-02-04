import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import { PersonRow } from "../../components/Table/Row";

import Alert from "../../components/Alert";

class Search extends Component {
  state = {
    items: [],
    results: [],
    searched: true,
    search: ""
  };

  // When the component mounts, update the title to be Wikipedia Searcher
  componentDidMount() {
    document.title = "Employee Finder";

    API.searchTerms(this.state.search)
      .then(res => {
        console.log(res)
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({
          items: res.data.results
        });
      })
      .catch(err => this.setState({ error: err.message }));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.search) {
      return;
    }
    this.setState({
      items: this.state.items.filter((person) => person.name.first.toLowerCase().includes(this.state.search.toLowerCase()))
    })
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Welcome to Employee</h1>
          <Alert type="danger" style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}>
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            results={this.state.search}
          />
          <table>
            <tbody>
              {this.state.items.map((person, index) => <PersonRow key={index} {...person} />)}
            </tbody>
          </table>
        </Container>
      </div>
    );
  }
}

export default Search;
