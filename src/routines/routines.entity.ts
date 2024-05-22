import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'routines' })
export class RoutinesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  user_id: number;

  @Column()
  timeframe: number;

  @Column()
  followers: number;

  @Column()
  routine_types_id: number;

}
