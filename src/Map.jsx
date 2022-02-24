import React from "react";
import Buttons from "./Buttons";
import pokemons from "./data";
import Order from "./Order";

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inicio: 0,
      types: ""
    }
    this.cliquei = this.cliquei.bind(this)
    this.tipos = this.tipos.bind(this)
    this.all = this.all.bind(this)
  }

  all(e) {
    this.setState({
      inicio: 0,
      types: ""
    })
  }

  tipos(e) {
    this.setState({
      inicio: 0
    })
    this.setState({
      types: e.target.name
    })
  }

  cliquei() {
    const mapP = pokemons
      .filter((ele) => ele.type.includes(this.state.types))
      .map((el) => <Order key={el.name} order={el} />);


    if (this.state.inicio < mapP.length - 1) {
      this.setState((va, _props) => ({
        inicio: va.inicio + 1
      }))
    } else if (mapP.length > this.state.inicio) {
      this.setState(() => ({
        inicio: 0
      }))
    }
  }

  render() {
    return (
      <>
        {pokemons
          .filter((ele) => ele.type.includes(this.state.types))
          .filter((_, i) => i === this.state.inicio)
          .map((el) => <Order key={el.name} order={el} />)}
        <Buttons value={this.state.types} tipos={this.tipos} />
        <button type="button" class="btn btn-primary" onClick={this.all}>ALL Types</button>
        <button disabled={Object.keys(pokemons
          .filter((ele) => ele.type === this.state.types)).length === 1 ? true : false} type="button" class="btn btn-success" onClick={this.cliquei}>Next Pokémon</button>
      </>
    );
  }
}

export default Map;