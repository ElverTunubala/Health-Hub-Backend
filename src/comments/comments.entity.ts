import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';

@Entity({ name: 'comments' })
export class CommentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // role_id: number;

  @Column()
  user_id: number;

  @Column()
  comment: string;

  @ManyToOne(() => UserEntity, (comment) => comment.users)
  role: UserEntity;
}
