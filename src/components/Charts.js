import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData : {
        labels: ['Johannesburg', 'Durban', 'CapeTown','Port Elizabet', 'Western Cape', 'Easter Cape'],
        datasets:[
          {
          label: 'Populations',
          data: [
              903433,
              593239,
              533234,
              838384,
              522343,
              219393
          ],
          backgroundColor: [
            'rgba(255,99,132,0.6)',
            'rgba(54,162,235,0.6)',
            'rgba(255,206,86,0.6)',
            'rgba(75,192,192,0.6)',
            'rgba(153,102,255,0.6)',
            'rgba(255,159,64,0.6)',
            'rgba(255,99,132,0.6)'
          ]
        }
      ]

      }
    }
  }
  render(){
    return (

        <div className="app">
          <Bar
            data={this.state.chartData}
            height ={20}
            width = {50}
            option={{maintainAspectRatio: false}}
          />
        </div>
    )
  }
}

export default Chart;
