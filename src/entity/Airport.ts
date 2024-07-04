import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { City } from './City';

@Entity('Airport') // Match your existing table name
export class Airport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'icao_code' })
  icaoCode: string;

  @Column({ name: 'iata_code' })
  iataCode: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ name: 'latitude_deg' })
  latitudeDeg: number;

  @Column({ name: 'longitude_deg' })
  longitudeDeg: number;

  @Column({ name: 'elevation_ft' })
  elevationFt: number;

  @ManyToOne(() => City, city => city.airports)
  city: City;
}
