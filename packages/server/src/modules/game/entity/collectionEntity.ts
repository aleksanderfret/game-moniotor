/* eslint-disable import/no-cycle */
import { Column, Entity, ManyToOne } from 'typeorm';
import { ObjectType, GraphQLISODateTime, Field } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import User from 'modules/user/entity/userEntity';
import Game from './gameEntity';

@ObjectType()
@Entity()
export default class Collection extends BaseEntity {
  @Field()
  @Column()
  gameId!: string;

  @Field()
  @Column()
  userId!: string;

  @Field(() => GraphQLISODateTime)
  @Column({ nullable: false, type: 'timestamptz' })
  owned!: Date;

  @ManyToOne(() => User, user => user.collection)
  user!: User;

  @ManyToOne(() => Game, game => game.collection)
  game!: Game;
}
