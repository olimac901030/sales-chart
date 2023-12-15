'use client';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { Box } from '@ui/index';
import { observer } from 'mobx-react-lite';
import { salesReportStr } from '../stores/SalesReportStore';

export const Graph = observer(function () {
  return (
    <Box>
      <HighchartsReact highcharts={Highcharts} options={salesReportStr.chartOptions} constructorType={'chart'} />
    </Box>
  );
});
