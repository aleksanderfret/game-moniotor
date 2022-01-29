/* eslint-disable import/no-cycle */
import {
  Column,
  Entity,
  ManyToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import Game from 'modules/game/entity/gameEntity';
import User from 'modules/user/entity/userEntity';
import Play from 'modules/play/entity/playEntity';
import Rate from 'modules/rate/entity/rateEntity';
import Address from 'modules/address/entity/addressEntity';

@ObjectType()
@Entity()
export default class GameEvent extends BaseEntity {
  @Field({ nullable: false })
  @Column({ length: 50, nullable: false, type: 'varchar' })
  title!: string;

  @Field({ nullable: true })
  @Column({ length: 1000, nullable: true, type: 'varchar' })
  description!: string;

  @Field(() => Play)
  @ManyToMany(() => Play, play => play.gameEvent)
  @JoinTable()
  plays!: Play[];

  @Field(() => Game)
  @ManyToMany(() => Game, game => game.gameEvents)
  @JoinTable()
  games!: Game;

  @Field(() => User)
  @ManyToMany(() => User, user => user.organizedEvent)
  @JoinTable()
  organizers!: User[];

  @Field(() => User)
  @ManyToMany(() => User, user => user.participation)
  @JoinTable()
  participants!: User[];

  @Field(() => User)
  @ManyToOne(() => User, user => user.reviews)
  reviewer!: User;

  @Field(() => Rate)
  @OneToMany(() => Rate, rate => rate.gameEvent)
  rates!: Rate;

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
