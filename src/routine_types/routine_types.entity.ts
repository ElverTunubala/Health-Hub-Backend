import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'routine_types' })
export class RoutineTypesEntity {
  @PrimaryGeneratedColumn()
  routine_types_id: number;

  @Column()
  name: string;

}

