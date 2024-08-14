import React, { useState } from 'react';

import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

export  const ApexChart = ({series,xaxis,colors= ["#088FFC","#04E298","#FFB119"]}) => {

    // const defaultColors = ["#088FFC","#04E298","FFB119"];
    const [chartState, setChartState] = useState({
      series: series,
      options: {
        chart: {
          height: 250,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: xaxis,
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
        fill: {
            colors: colors
          },
        colors: colors
      },

    });
  
    return (
      <StyledDiv>
        <div id="chart">
          <ReactApexChart
            options={chartState.options}
            series={chartState.series}
            type="area"
            height={250}
          />
        </div>
        <div id="html-dist"></div>
      </StyledDiv>
    );
  };
  

  const StyledDiv = styled.div`
  margin-top: 20px;
  `;
