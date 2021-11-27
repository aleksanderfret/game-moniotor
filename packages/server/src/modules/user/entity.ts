/* eslint-disable import/no-cycle */
import { Column, Entity, OneToMany } from 'typeorm';
import { ObjectType, Field, GraphQLISODateTime } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import Token from 'modules/auth/entity';
import { Status } from './enums';

@ObjectType()
@Entity()
export default class User extends BaseEntity {
  @Field({ nullable: true })
  @Column({ nullable: true, type: 'timestamptz' })
  activeAt!: Date;

  @Field({ nullable: true })
  @Column({ length: 256, nullable: true, type: 'varchar' })
  avatarUrl!: string;

  @Field({ nullable: true })
  @Column({ nullable: true, type: 'timestamptz' })
  deletedAt!: Date;

  @Field()
  @Column({ length: 128, nullable: false, type: 'varchar', unique: true })
  email!: string;

  @Field({ nullable: true })
  @Column({ length: 50, nullable: true, type: 'varchar' })
  name!: string;

  @Column({ length: 128, nullable: true, type: 'varchar' })
  password!: string;

  @Field(() => GraphQLISODateTime)
  @Column({ nullable: false, type: 'timestamptz' })
  policy!: Date;

  @Column({ length: 50, nullable: true, type: 'varchar' })
  provider!: string;

  @Column({ default: 0, nullable: false, type: 'integer' })
  tokenVersion!: number;

  @Field(() => Status)
  @Column({
    default: Status.Active,
    enum: Status,
    nullable: false,
    type: 'enum'
  })
  status!: Status;

  @Field(() => Token)
  @OneToMany(() => Token, token => token.user)
  token!: Token[];
}
