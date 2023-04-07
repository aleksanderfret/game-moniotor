/* eslint-disable import/no-cycle */
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, GraphQLISODateTime } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import Game from 'modules/game/entity/gameEntity';
import User from 'modules/user/entity/userEntity';
import Address from 'modules/address/entity/addressEntity';
import GameEvent from 'modules/gameEvent/entity/gameEventEntity';

@ObjectType()
@Entity()
export default class Play extends BaseEntity {
  @Field({ nullable: true })
  @Column({ length: 1000, nullable: true, type: 'varchar' })
  description!: string;

  @Field(() => Game)
  @OneToMany(() => Game, game => game.plays)
  game!: Game;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ nullable: true, type: 'timestamptz' })
  date!: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ nullable: true, type: 'timestamptz' })
  start!: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ nullable: true, type: 'timestamptz' })
  end!: Date;

  @Field({ nullable: false })
  @Column({ default: true, nullable: false, type: 'boolean' })
  private!: boolean;

  @Field(() => User, { nullable: false })
  @OneToOne(() => User, user => user.organizedPlay, { nullable: false })
  @JoinColumn()
  organizer!: User;

  @Field(() => GameEvent)
  @ManyToMany(() => GameEvent, gameEvent => gameEvent.plays)
  gameEvent!: GameEvent;

  @Field(() => User)
  @ManyToMany(() => User, user => user.play)
  players!: User[];

  @Field(() => Address)
  @OneToMany(() => Address, address => address.plays)
  address!: Address;

  @Field({ nullable: true })
  @Column({
    default: 0.0,
    nullable: true,
    precision: 8,
    scale: 6,
    type: 'decimal',
  })
  latitude!: number;

  @Field({ nullable: true })
  @Column({
    default: 0.0,
    nullable: true,
    precision: 9,
    scale: 6,
    type: 'decimal',
  })
  longitude!: number;
}
