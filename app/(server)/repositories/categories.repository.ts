import { CategoriesModel } from '$model/categories.model';
import { ICategories } from '~/categories.type';

const POPULATE = 'name';

async function read(): Promise<ICategories[] | null> {
  return CategoriesModel.find({ id: { $ne: -1 } }).select(POPULATE);
  //   .populate({ path: 'peripherals', model: PeripheralModel });
}

/**
 * Inserts fake data into the collection using the Mongoose model.
 *
 * @return {Promise} A promise that resolves when the insertion is complete.
 */
async function populate(): Promise<any> {
  const dataToInsert = [
    { name: 'Comida' },
    { name: 'Electrodomésticos' }
    // Add more data as needed
  ];

  // Insert the data into the collection using the Mongoose model
  await CategoriesModel.insertMany(dataToInsert);
}

export const CategoriesRepository = { read, populate };
