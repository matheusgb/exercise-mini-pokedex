import React from "react";

class Types extends React.Component {
  render() {
    const { value, tipos } = this.props

    const { type } = this.props.lero;

    return (
      <>
        <button type="button" class="btn btn-dark" name={type} value={value} onClick={tipos}> {type} </button>
      </>
    );
  }
}

export default Types;