import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'routine_types' })
export class RoutineTypesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  routine_types_id: number;

}

