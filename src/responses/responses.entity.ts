import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'responses' })
export class ResponsesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment_id: number;

  @Column()
  user_id: number;

  @Column()
  response: string;
}
