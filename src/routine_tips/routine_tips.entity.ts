import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'routine_tips' })
export class RoutineTipsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  routine_id: number;

}
