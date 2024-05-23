import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CommentsEntity } from '../comments/comments.entity';
import { UserEntity } from 'src/user/user.entity';

@Entity({ name: 'responses' })
export class ResponsesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // comment_id: number;

  // @Column()
  // user_id: number;

  @Column()
  response: string;
  // una respuesta viene de un solo comentario
  @ManyToOne(() => CommentsEntity, (comment) => comment.response)
  comment: CommentsEntity;

  // una respuesta viene de un solo usuario
  @ManyToOne(() => UserEntity, (user) => user.response)
  user: UserEntity;
}
