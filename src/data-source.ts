import { DataSource } from 'typeorm';
import { Airport } from './entity/Airport';
import { City } from './entity/City';
import { Country } from './entity/Country';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'your_host',
  port: 3306,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database',
  synchronize: false, // Ensure this is false for existing databases
  logging: true,
  entities: [Airport, City, Country],
  migrations: [],
  subscribers: [],
});
