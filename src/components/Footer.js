import React, { Component } from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

class Footer extends Component {
  render() {
    return (
      <div className="App-footer">
        <span>Filters:</span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </div>
    );
  }
}

export default Footer;