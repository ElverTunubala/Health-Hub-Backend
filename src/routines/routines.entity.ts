import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import {UserEntity} from '../user/user.entity';
import {RoutineTypesEntity} from '../routine_types/routine_types.entity';

@Entity({ name: 'routines' })
export class RoutinesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @Column()
  // user_id: number;

  @Column()
  timeframe: number;

  @Column()
  followers: number;

  // @Column()
  // routine_types_id: number;

  @ManyToOne(() => UserEntity, (user) => user.routines)
  user: UserEntity;

  @ManyToOne(() => RoutineTypesEntity, (routineTypes) => routineTypes.routines)
  routine_type: RoutineTypesEntity;

  @ManyToMany(() => UserEntity)
  @JoinTable()
  followersUsers: UserEntity[];

}
