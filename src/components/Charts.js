import React, {Component} from 'react';
import {Bar, Bubble} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      bubbleData: {
        labels: ['January'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [{x:10,y:20,r:5}, {x:85,y:7,r:7}]
    }
  ]
},
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
            //height ={150}
            //width = {30}
            options = {{
              titles : {
              display: true,
              text: 'Largest Cities in South Africa',
              fontSize: 25
            },
            legend:{
             display: true,
             position: 'right',
             labels: {
               fontColor: '#00'
              }
            },
            layout: {
             padding: {
              left: 50,
              right: 0,
              bottom: 0,
              top: 0
             }
            },
            tooltips: {
             enabled: true
            }
            }
            }
          />

          <Bubble
            data={this.state.bubbleData}
          />
        </div>
    )
  }
}

export default Chart;
