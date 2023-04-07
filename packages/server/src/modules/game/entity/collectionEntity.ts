/* eslint-disable import/no-cycle */
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { ObjectType, GraphQLISODateTime, Field } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import User from 'modules/user/entity/userEntity';
import Game from './gameEntity';
import { OwnStatus } from '../enums';

@ObjectType()
@Entity()
export default class Collection extends BaseEntity {
  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ nullable: true, type: 'timestamptz' })
  owned!: Date;

  @Field(() => OwnStatus, { nullable: false })
  @Column({
    enum: OwnStatus,
    nullable: true,
    type: 'enum',
  })
  status!: OwnStatus;

  @Field(() => User)
  @ManyToOne(() => User, user => user.collection)
  user!: User;

  @Field(() => Game)
  @ManyToMany(() => Game, game => game.collection)
  game!: Game;
}
