import React from "react";
import { Segment, Input } from "semantic-ui-react";
import { connect } from "react-redux";

const SearchBar = (props) => {
  const searchTerm = (event) => {
    if (event.keyCode === 13) {
      console.log(event.target.value);
    }
  };

  return (
    <div className="search-bar">
      <Segment stacked>
        <Input
          icon="search"
          onKeyDown={searchTerm}
          size="large"
          placeholder="Search ..."
        />
      </Segment>
    </div>
  );
};

export default connect(null, null)(SearchBar);
