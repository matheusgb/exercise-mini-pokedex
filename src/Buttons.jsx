import React from "react";
import pokemons from "./data";
import Types from "./Types";

class Buttons extends React.Component {


  render() {
    const unique = [];
    pokemons.map(x => unique.filter(a => a.type === x.type).length > 0 ? null : unique.push(x))
    // https://stackoverflow.com/questions/53542882/es6-removing-duplicates-from-array-of-objects
    const { value, tipos } = this.props
    return (

      <div className="botoes">
        {unique
          .map((el) => <Types key={el.type} value={value} tipos={tipos} lero={el} />)}
      </div>
    );
  }
}

export default Buttons;