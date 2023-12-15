import { BrandRepository } from '$repo/brand.repository';
import { ISale } from '~/sale.type';

export class BrandController {
  getSalesById = async (id: string) => {
    const brand = await BrandRepository.readById(id);
    const sales =
      brand?.sales?.map((sale: ISale) => {
        return {
          id: sale._id,
          date: sale.date,
          amount: sale.amount
        };
      }) || [];

    const monthNames = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ];

    const salesByMonth = sales.reduce((acc: any, sale) => {
      const date = new Date(sale.date);
      const month = date.getMonth();
      const year = date.getFullYear();
      const key = `${year}-${month}`;

      if (!acc[key]) {
        acc[key] = 0;
      }

      acc[key] += sale.amount;
      return acc;
    }, {});

    return Object.keys(salesByMonth).map((key) => {
      const [, month] = key.split('-');
      return {
        month: monthNames[parseInt(month)],
        value: salesByMonth[key]
      };
    });
  };
}

export const BrandCtrl = new BrandController();
