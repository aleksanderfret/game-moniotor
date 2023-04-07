/* eslint-disable import/no-cycle */
import { Column, Entity, ManyToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import Game from 'modules/game/entity/gameEntity';
import User from 'modules/user/entity/userEntity';

@ObjectType()
@Entity()
export default class Difficulty extends BaseEntity {
  @Field({
    nullable: false,
  })
  @Column({
    precision: 1,
    scale: 0,
    type: 'numeric',
  })
  difficulty!: number;

  @Field(() => User, { nullable: false })
  @ManyToOne(() => User, user => user.difficulties, { nullable: false })
  user!: User;

  @Field(() => Game)
  @ManyToOne(() => Game, game => game.difficulties)
  game!: Game;
}
