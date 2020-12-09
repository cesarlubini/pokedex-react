import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

  render() {
    return(
      <form class="form">
        <div className="input-block">
          <span className="form__search">
            <input placeholder="Search for name or id" />
          </span>
        </div>
        <button className="btn btn-primary" type="submit">catch!</button>
      </form>
    )
  }

}

export default SearchForm;