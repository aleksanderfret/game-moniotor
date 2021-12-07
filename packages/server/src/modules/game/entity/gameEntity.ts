/* eslint-disable import/no-cycle */
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn
} from 'typeorm';
import { ObjectType, Field, GraphQLISODateTime } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import User from 'modules/user/entity/userEntity';
import Category from './categoryEntity';
import Type from './typeEntity';
import Mechanics from './mechanicsEntity';
import Designer from './designerEntity';
import Artist from './artistEntity';
import Publisher from './publisherEntity';
import Review from 'modules/review/entity/reviewEntity';
import Play from 'modules/play/entity/playEntity';
import Address from 'modules/address/entity/addressEntity';
import GameEvent from 'modules/gameEvent/entity/gameEventEntity';
import Rate from 'modules/rate/entity/rateEntity';

@ObjectType()
@Entity()
export default class Game extends BaseEntity {
  @Field({ nullable: true })
  @Column({ length: 256, nullable: true, type: 'varchar' })
  cover!: string;

  @Field({ nullable: true })
  @Column({ nullable: true, type: 'timestamptz' })
  deletedAt!: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ nullable: true, type: 'timestamptz' })
  premiere!: Date;

  @Field({ nullable: true })
  @Column({ length: 256, nullable: true, type: 'varchar' })
  subtitle!: string;

  @Field({ nullable: true })
  @Column({ length: 256, nullable: false, type: 'varchar' })
  title!: string;

  @Field({ nullable: true })
  @Column({ nullable: true, precision: 1, scale: 0, type: 'numeric' })
  minTime!: number;

  @Field({ nullable: true })
  @Column({ nullable: true, precision: 3, scale: 0, type: 'numeric' })
  maxTime!: number;

  @Field({ nullable: true })
  @Column({ nullable: true, precision: 3, scale: 0, type: 'numeric' })
  time!: number;

  @Field({ nullable: true })
  @Column({ nullable: true, precision: 3, scale: 0, type: 'numeric' })
  age!: number;

  @Field({ nullable: true })
  @Column({ nullable: true, precision: 3, scale: 0, type: 'numeric' })
  minPlayers!: number;

  @Field({ nullable: true })
  @Column({ nullable: true, precision: 3, scale: 0, type: 'numeric' })
  maxPlayers!: number;

  @Field({ nullable: true })
  @Column({ nullable: true, precision: 3, scale: 0, type: 'numeric' })
  players!: number;

  @Field({ nullable: false })
  @Column({ default: false, nullable: false, type: 'boolean' })
  private!: boolean;

  @Field({ nullable: true })
  @Column({ length: 1000, nullable: true, type: 'varchar' })
  description!: string;

  @Field(() => User, { nullable: false })
  @OneToOne(() => User, {
    nullable: false
  })
  @JoinColumn()
  addedBy!: User;

  @Field(() => Designer, { nullable: true })
  @ManyToMany(() => Designer, designer => designer.games, { nullable: true })
  designers!: Designer[];

  @Field(() => Artist, { nullable: true })
  @ManyToMany(() => Artist, artist => artist.games, { nullable: true })
  artists!: Artist[];

  @Field(() => Mechanics)
  @ManyToMany(() => Mechanics, mechanics => mechanics.games)
  mechanics!: Mechanics[];

  @Field(() => Category)
  @ManyToMany(() => Category, category => category.games)
  categories!: Category[];

  @Field(() => Type)
  @ManyToOne(() => Type, gameType => gameType.games)
  gameType!: Type;

  @Field(() => Publisher, { nullable: true })
  @ManyToOne(() => Publisher, publisher => publisher.games, { nullable: true })
  type!: Publisher;

  @Field(() => Rate)
  @OneToMany(() => Rate, rate => rate.game)
  rates!: Rate;

  @Field(() => Play)
  @OneToMany(() => Play, play => play.game)
  plays!: Play[];

  @Field(() => GameEvent)
  @ManyToMany(() => GameEvent, gameEvent => gameEvent.games)
  gameEvents!: GameEvent[];

  @Field(() => Address)
  @OneToMany(() => Address, address => address.games)
  address!: Address;

  @Field(() => Review, { nullable: true })
  @OneToMany(() => Review, review => review.game, { nullable: true })
  reviews!: Review[];
}
