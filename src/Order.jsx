import React from "react";

class Order extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.order;

    return (
      <div key={name} className="cards">
        <img src={image} alt={name} />
        <div className="paras" key={name}>
          <p> {name} </p>
          <p> {type} </p>
          <p> {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
      </div>
    )
  }
}

export default Order;