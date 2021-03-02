import React from 'react';
import './App.css';
import { Bar } from 'react-chartjs-2';

const srcData = [
  {
    year: 2015,
    data: [
      536531,
      1017273,
      1496702,
      1882366,
      2228939,
      2515784,
      2753399,
      2966478,
      3236838,
      3613068,
      4047828,
      4547209
    ],
    color: 'hsla(50,100%,59.21569%,1)'
  },
  {
    year: 2016,
    data: [
      551503,
      1057792,
      1521903,
      1908192,
      2191201,
      2412114,
      2634171,
      2900548,
      3159543,
      3552987,
      4052115,
      4553624
    ],
    color: 'hsla(104,46.15384%,54.11765%,1)'
  }
];

const options = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false,
      lineTension: 0
    }
  },
  scales: {
    yAxes: [
      {
        tics: { min: 0 }
      }
    ]
  },
  legend: {
    display: true,
    position: 'bottom',
    reverse: true,
    onClick: null
  }
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

type srcDataType =  {
  year: number;
  data: number[];
  color: string;
}

type ChartProps = {
  data: srcDataType[]
}

const Chart: React.SFC<ChartProps> = ({ data }) => {
  
  const config = {
    labels: labels,
    datasets: data.map((series, idx, arr) => {
      let { year, data, color } = series;
      return {
        id: year,
        type: idx < arr.length - 1 ? 'line' : 'bar',
        label: year,
        data: data,
        backgroundColor: color,
        borderColor: color
      };
    })
  };
  return <Bar data={config} options={options} />;
};

const App = () => {
  return (
    <div className="App">
      <Chart data={srcData} />
    </div>
  );
}

export default App;
