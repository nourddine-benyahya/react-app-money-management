// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import React from 'react'

import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        series: 
          this.props.series,
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10,
              dataLabels: {
                total: {
                  enabled: true,
                  style: {
                    fontSize: '13px',
                    fontWeight: 900
                  }
                }
              }
            },
          },
          xaxis: {
            type: "datetime"
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          }
        },
      
      
      };
    }

    render() {
      return (

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>


      );
    }
  }

export default ApexChart;