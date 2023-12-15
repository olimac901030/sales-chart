import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose, { ConnectionStates } from 'mongoose';
import { CategoriesModel } from '$model/categories.model';
import { ProductsModel } from '$model/products.model';

let mongoMemoryServer: MongoMemoryServer = undefined as unknown as MongoMemoryServer;
const isDataLoaded = false;

const STATUS = [ConnectionStates.disconnected, ConnectionStates.disconnecting, ConnectionStates.uninitialized];

/**
 * Connect to the in-memory database.
 */
export const connect = async () => {
  if (!mongoMemoryServer)
    mongoMemoryServer = await MongoMemoryServer.create({
      instance: {
        dbName: 'myDatabase', // Nombre de la base de datos
        ip: '127.0.0.1', // Dirección IP
        port: 27017 // Puerto
      }
    });
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
  const category1 = await CategoriesModel.create({ name: 'Cereales' });

  await ProductsModel.create({ name: 'Arroz', categories: category1.id });
  await ProductsModel.create({ name: 'Maiz', categories: category1.id });
}
