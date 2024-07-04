import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { City } from './City';

@Entity('Country') // Match your existing table name
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'country_code_two' })
  countryCodeTwo: string;

  @Column({ name: 'country_code_three' })
  countryCodeThree: string;

  @Column({ name: 'mobile_code' })
  mobileCode: number;

  @Column({ name: 'continent_id' })
  continentId: number;

  @OneToMany(() => City, city => city.country)
  cities: City[];
}
