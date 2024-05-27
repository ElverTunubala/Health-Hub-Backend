import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
import { ResponsesEntity } from '../responses/responses.entity';

@Entity({ name: 'comments' })
export class CommentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // role_id: number;

  // @Column()
  // user_id: number;

  @Column()
  comment: string;
  //un comentario pertenece a un usuario
  @ManyToOne(() => UserEntity, (user) => user.comments)
  user: UserEntity;
  //un comentario puede tener varias respuestas
  @OneToMany(() => ResponsesEntity, (response) => response.comment)
  response: ResponsesEntity[];
}
