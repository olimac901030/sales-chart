import { action, makeObservable, observable } from 'mobx';
import { TFormSaleFilters } from '~/gateway.type';
import { formFactory } from '@form/formFactory';
import { productStr } from './ProductStore';
import { brandStr } from './BrandStore';
import { IGraph } from '~/graph.type';
import { brandSvc } from '../services/brand.service';

export class SalesReportStore {
  form = formFactory<TFormSaleFilters>({ category: '', product: '', brand: '' });

  items: TFormSaleFilters[] = [];

  constructor(public chartOptions: IGraph = getBaseGraphConfig()) {
    makeObservable(this, {
      items: observable,
      form: observable,
      chartOptions: observable,

      addToItems: action,
      setItems: action,
      setChartOptions: action
    });
  }

  // region GETTERS & SETTERS

  addToItems = (item: TFormSaleFilters) => {
    this.items = [item, ...this.items];
  };
  setItems = (items: TFormSaleFilters[] = []) => {
    this.items = items;
  };
  setChartOptions = (chartOptions: IGraph) => {
    this.chartOptions = chartOptions;
  };

  // endregion

  // region METHODS

  // endregion

  // region EVENTS
  onChangeCategory = (value: string) => {
    this.form.brand.reset();
    this.form.product.reset();
    void productStr.loadItems(value);
  };
  onChangeProduct = (value: string) => {
    this.form.brand.reset();
    void brandStr.loadItems(value);
  };

  onChangeBrand = async (value: string) => {
    const categories: string[] = [];
    const values: number[] = [];

    const { ok, data } = await brandSvc.getBrandSales(value);
    // TODO call the services here
    if (ok) {
      data.forEach(({ month, value }) => {
        categories.push(month);
        values.push(value);
      });
    }

    this.setChartOptions(getBaseGraphConfig(categories, values));
  };
  // endregion
}

export const salesReportStr = new SalesReportStore();

function getBaseGraphConfig(categories: string[] = [], data: number[] = []): IGraph {
  return {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Sales By Month for:'
    },
    xAxis: {
      categories,
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
        data
      }
    ]
  };
}
