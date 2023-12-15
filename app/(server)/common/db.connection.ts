import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose, { ConnectionStates } from 'mongoose';
import { CategoryModel } from '$model/category.model';
import { ProductModel } from '$model/product.model';
import { BrandModel } from '$model/brand.model';
import { SaleModel } from '$model/sale.model';
import * as fs from 'fs';

let mongoMemoryServer: MongoMemoryServer = undefined as unknown as MongoMemoryServer;

const STATUS = [ConnectionStates.disconnected, ConnectionStates.disconnecting, ConnectionStates.uninitialized];

/**
 * Connect to the in-memory database.
 */
export const connect = async () => {
  const filePath = './myDataFile.json'; // Ruta del archivo en la raíz del proyecto

  try {
    // Crea el archivo vacío si no existe
    fs.accessSync(filePath);
  } catch (error) {
    // Si el archivo no existe, lo crea
    fs.writeFileSync(filePath, '[]', 'utf-8');
  }
  if (!mongoMemoryServer) {
    mongoMemoryServer = await MongoMemoryServer.create({
      instance: {
        dbName: 'myDatabase', // Nombre de la base de datos
        ip: '127.0.0.1', // Dirección IP
        port: 27017 // Puerto
      }
    });
  }

  if (STATUS.includes(mongoose.connection.readyState)) {
    await mongoose.connect(mongoMemoryServer.getUri(), {});
    await populate();
  }
};

/**
 * Drop database, close the connection and stop mongod.
 */
export const closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoMemoryServer.stop();
};

/**
 * Remove all the data for all db collections.
 */
export const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};

/**
 * Inserts fake data into the collection using the Mongoose model.
 *
 * @return {Promise} A promise that resolves when the insertion is complete.
 */
async function populate(): Promise<any> {
  // Creating sample products

  // Creating sample category and associating products
  const category1 = await CategoryModel.create({ name: 'Cereales' });
  const category2 = await CategoryModel.create({ name: 'Carnes' });
  const category3 = await CategoryModel.create({ name: 'Electrodomésticos' });

  const product1 = await ProductModel.create({ name: 'Arroz', category: category1.id });
  const product2 = await ProductModel.create({ name: 'Maiz', category: category1.id });
  const product3 = await ProductModel.create({ name: 'Cerdo', category: category2.id });
  const product4 = await ProductModel.create({ name: 'Pollo', category: category2.id });
  const product5 = await ProductModel.create({ name: 'Higo', category: category1.id });
  const product6 = await ProductModel.create({ name: 'Pescado', category: category2.id });
  const product7 = await ProductModel.create({ name: 'Cocina', category: category3.id });
  const product8 = await ProductModel.create({ name: 'Lavadora', category: category3.id });
  const product9 = await ProductModel.create({ name: 'Televisor', category: category3.id });

  const brand2 = await BrandModel.create({ name: 'Britania', product: product1.id });
  const brand3 = await BrandModel.create({ name: 'Kellogs', product: product2.id });
  const brand4 = await BrandModel.create({ name: 'Cocacola', product: product2.id });
  const brand5 = await BrandModel.create({ name: 'Picanha', product: product3.id });
  const brand6 = await BrandModel.create({ name: 'Palmiche', product: product3.id });
  const brand7 = await BrandModel.create({ name: 'Pollo Supreme', product: product4.id });
  const brand8 = await BrandModel.create({ name: 'Pollo Elixir', product: product4.id });

  await SaleModel.create({ date: new Date('2023-02-01'), amount: 10, brand: brand2.id });
  await SaleModel.create({ date: new Date('2023-03-01'), amount: 30, brand: brand2.id });
  await SaleModel.create({ date: new Date('2023-04-01'), amount: 10, brand: brand2.id });
  await SaleModel.create({ date: new Date('2023-05-01'), amount: 150, brand: brand2.id });
  await SaleModel.create({ date: new Date('2023-06-01'), amount: 10, brand: brand2.id });
  await SaleModel.create({ date: new Date('2023-07-01'), amount: 10, brand: brand2.id });
  await SaleModel.create({ date: new Date('2023-08-01'), amount: 25, brand: brand2.id });
  await SaleModel.create({ date: new Date('2023-09-01'), amount: 63, brand: brand2.id });
  await SaleModel.create({ date: new Date('2023-10-01'), amount: 10, brand: brand2.id });
  await SaleModel.create({ date: new Date('2023-11-01'), amount: 18, brand: brand2.id });
  await SaleModel.create({ date: new Date('2023-12-01'), amount: 10, brand: brand2.id });
  await SaleModel.create({ date: new Date(), amount: 200, brand: brand2.id });
  await SaleModel.create({ date: new Date(), amount: 300, brand: brand3.id });
  await SaleModel.create({ date: new Date(), amount: 400, brand: brand4.id });
  await SaleModel.create({ date: new Date(), amount: 500, brand: brand5.id });
  await SaleModel.create({ date: new Date(), amount: 600, brand: brand6.id });
  await SaleModel.create({ date: new Date(), amount: 700, brand: brand7.id });
  await SaleModel.create({ date: new Date(), amount: 800, brand: brand8.id });
}
