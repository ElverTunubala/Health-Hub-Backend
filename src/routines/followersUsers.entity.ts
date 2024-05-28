import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { RoutinesEntity } from '../routines/routines.entity';

@Entity('routines_followers_users')
export class RoutinesFollowersUsersEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => UserEntity, (user) => user.routinesFollowers)
  user: UserEntity;

  @ManyToOne(() => RoutinesEntity, (routine) => routine.followersUsers)
  routine: RoutinesEntity;
}
