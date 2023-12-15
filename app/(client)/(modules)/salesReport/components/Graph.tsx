'use client';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { Box } from '@ui/index';

export function Graph() {
  return (
    <Box>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'column'
          },
          title: {
            text: 'Sales By Month for:'
          },
          xAxis: {
            categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
            crosshair: true,
            accessibility: {
              description: 'Countries'
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Ventas'
            }
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            }
          },
          series: [
            {
              name: 'Ventas',
              data: [406292, 260000, 107000, 68300, 27500, 14500]
            }
          ]
        }}
        constructorType={'chart'}
      />
    </Box>
  );
}
