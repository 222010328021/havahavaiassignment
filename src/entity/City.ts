import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Country } from './Country';
import { Airport } from './Airport';

@Entity('City') // Match your existing table name
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'country_id' })
  countryId: number;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @Column()
  lat: number;

  @Column()
  long: number;

  @ManyToOne(() => Country, country => country.cities)
  country: Country;

  @OneToMany(() => Airport, airport => airport.city)
  airports: Airport[];
}
