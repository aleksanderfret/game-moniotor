/* eslint-disable import/no-cycle */
import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import User from 'modules/user/entity/userEntity';
import { TokenType } from '../enums';

@ObjectType()
@Entity()
@Index(['id', 'token', 'type', 'user'], { unique: true })
export default class Token extends BaseEntity {
  @Field({ nullable: false })
  @Column({ length: 2000, type: 'varchar' })
  token!: string;

  @Column({
    enum: TokenType,
    nullable: false,
    type: 'enum',
  })
  type!: TokenType;

  @ManyToOne(() => User, user => user.token, { eager: true, nullable: true })
  user!: User;
}
