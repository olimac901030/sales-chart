import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose, { ConnectionStates } from 'mongoose';

let mongoMemoryServer: MongoMemoryServer = undefined as unknown as MongoMemoryServer;

const STATUS = [ConnectionStates.disconnected, ConnectionStates.disconnecting, ConnectionStates.uninitialized];

/**
 * Connect to the in-memory database.
 */
export const connect = async () => {
  if (!mongoMemoryServer) mongoMemoryServer = await MongoMemoryServer.create();
  if (STATUS.includes(mongoose.connection.readyState)) {
    await mongoose.connect(mongoMemoryServer.getUri(), {});
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
