// src && demo: https://www.npmjs.com/package/react-minimal-pie-chart
import React, { Component } from "react";
import PieChart from "react-minimal-pie-chart";

const FULL_WIDTH = 35;
const NORMAL_WIDTH = 32;

class InteractivePieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data.map(entry => ({
        ...entry,
        ...{ style: { strokeWidth: NORMAL_WIDTH } }
      })),
      selected: undefined
    };

    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onMouseOut(event, propsData, index) {
    const data = propsData.map((entry, i) => {
      return i === index
        ? {
            ...entry,
            color: this.props.data[index].color
          }
        : entry;
    });

    this.setState({
      data
    });
  }

  onMouseOver(event, propsData, index) {
    const data = propsData.map((entry, i) => {
      return i === index
        ? {
            ...entry,
            color: "grey"
          }
        : entry;
    });

    this.setState({
      data
    });
  }

  onClick(event, propsData, index) {
    const data = propsData.map((entry, i) => {
      return {
        ...entry,
        ...{
          style: {
            ...entry.style,
            strokeWidth: i === index ? FULL_WIDTH : NORMAL_WIDTH
          }
        }
      };
    });

    this.setState({
      data
    });
  }

  render() {
    return (
      <PieChart
        data={this.state.data}
        segmentsStyle={{ transition: "stroke .3s" }}
        onClick={this.onClick}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        animate
      />
    );
  }
}

export default InteractivePieChart;
