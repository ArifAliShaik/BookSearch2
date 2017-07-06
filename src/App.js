import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import Gallery from "./gallery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      items: []
    };
  }

  search() {
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";

    fetch(`${BASE_URL}${this.state.query}`, { method: "GET" })
      .then(response => response.json())
      .then(json => {
        let { items } = json;
        this.setState({ items: items });
        console.log(this.state.items);
      });
  }

  render() {
    return (
      <div className="main">
        <h3 className="text-center heading">Please search for any BOOK</h3>

        <FormGroup>
          <InputGroup className="col-sm-offset-3 col-sm-6">
            <FormControl
              type="input"
              placeholder="Enter a book name to search"
              onChange={event => this.setState({ query: event.target.value })}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>

        <Gallery items={this.state.items} />

      </div>
    );
  }
}

export default App;
