import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { RolesEntity } from 'src/roles/roles.entity';
import {CommentsEntity} from '../comments/comments.entity'
@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // rol_id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  creatDate: Date;

  @ManyToOne(() => RolesEntity, (role) => role.users)
  role: RolesEntity;

  @OneToMany(() => CommentsEntity, (comment) => comment.user)
  comments: CommentsEntity[];
}
