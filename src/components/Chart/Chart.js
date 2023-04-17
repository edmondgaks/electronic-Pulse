import React, { Component} from "react";

class ChartComponent extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
    }
}