import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'responses' })
export class ResponsesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  responses_id: number;

  @Column()
  role_id: number;

  @Column()
  comment_id: number;

  @Column()
  user_id: number;

  @Column()
  response: string;


}