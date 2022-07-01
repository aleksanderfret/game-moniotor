/* eslint-disable import/no-cycle */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import Game from './gameEntity';
import User from 'modules/user/entity/userEntity';
import Rate from 'modules/rate/entity/rateEntity';
import Favorite from 'modules/favorite/entity/favoriteEntity';

@ObjectType()
@Entity()
export default class Designer extends BaseEntity {
  @Field()
  @Column({ length: 50, nullable: false, type: 'varchar' })
  name!: string;

  @Field(() => Game)
  @ManyToMany(() => Game, game => game.categories)
  games!: Game[];

  @Field(() => User, { nullable: false })
  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  user!: User;

  @Field(() => Rate)
  @OneToMany(() => Rate, rate => rate.publisher)
  rates!: Rate[];

  @Field(() => Favorite)
  @OneToMany(() => Favorite, favorite => favorite.designer)
  favorites!: Favorite[];
}
