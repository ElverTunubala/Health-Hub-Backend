import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'physicians' })
export class PhysicianEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role_id: number;

  @Column()
  name: string;

  @Column()
  email: string;

}
