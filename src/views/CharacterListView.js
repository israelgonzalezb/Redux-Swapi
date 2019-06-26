import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChars } from "../actions";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getChars();
    console.log("hi", this.props.characters);
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <div>fetching...</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
