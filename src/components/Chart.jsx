import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


export  const ApexChart = () => {
    const [chartState, setChartState] = useState({
      series: [
        {
          name: '조회수',
          data: [31, 40, 50, 66, 70, 109, 200],
        },
        {
          name: '좋아요',
          data: [11, 32, 45, 52, 64, 72, 100],
        },
        {
            name: '댓글',
            data: [1, 5, 10, 30, 32, 40, 50],
          },
      ],
      options: {
        chart: {
          height: 500,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2024-01-19T00:00:00.000Z',
            '2024-02-19T01:30:00.000Z',
            '2024-03-19T02:30:00.000Z',
            '2024-04-19T03:30:00.000Z',
            '2024-05-19T04:30:00.000Z',
            '2024-06-19T05:30:00.000Z',
            '2024-07-19T06:30:00.000Z',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    });
  
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={chartState.options}
            series={chartState.series}
            type="area"
            height={500}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  };
  
//   const domContainer = document.querySelector('#app');
//   const root = createRoot(domContainer); 
//   root.render(<ApexChart />);
