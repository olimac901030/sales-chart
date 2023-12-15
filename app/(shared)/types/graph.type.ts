export type IGraph = {
  chart: {
    type: 'column';
  };
  title: {
    text: string;
  };
  xAxis: {
    categories: string[];
    crosshair: boolean;
    accessibility: {
      description: string;
    };
  };
  yAxis: {
    min: number;
    title: {
      text: string;
    };
  };
  plotOptions: {
    column: {
      pointPadding: number;
      borderWidth: number;
    };
  };
  series: {
    name: string;
    data: number[];
  }[];
};
