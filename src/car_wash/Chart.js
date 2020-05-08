import React from 'react';
import Chart from 'chart.js';
import { getXAxis, getYAxis } from './helper';

export default class LineGraph extends React.Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: getXAxis(this.props.data),
        datasets: [
          {
            label: "Ease of Exploit",
            data: getYAxis(this.props.data)
          },
        ]
      }
    });   
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
        <div onClick={this.props.hideChart}>Hide Chart</div>  
      </div>
    )
  }
}
