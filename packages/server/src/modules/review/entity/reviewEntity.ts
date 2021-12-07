/* eslint-disable import/no-cycle */
import { Column, Entity, ManyToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import Game from 'modules/game/entity/gameEntity';
import User from 'modules/user/entity/userEntity';

@ObjectType()
@Entity()
export default class Review extends BaseEntity {
  @Field({ nullable: false })
  @Column({ length: 50, nullable: false, type: 'varchar' })
  title!: string;

  @Field({ nullable: true })
  @Column({ length: 2048, nullable: false, type: 'varchar' })
  text!: string;

  @Field(() => Game)
  @ManyToOne(() => Game, game => game.reviews)
  game!: Game;

  @Field(() => User)
  @ManyToOne(() => User, user => user.reviews)
  reviewer!: User;
}
