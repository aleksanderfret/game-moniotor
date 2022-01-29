/* eslint-disable import/no-cycle */
import { Column, Entity, ManyToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import Play from 'modules/play/entity/playEntity';
import Game from 'modules/game/entity/gameEntity';
import GameEvent from 'modules/gameEvent/entity/gameEventEntity';
import User from 'modules/user/entity/userEntity';

@ObjectType()
@Entity()
export default class Rate extends BaseEntity {
  @Field({
    nullable: false,
  })
  @Column({
    default: 0.0,
    precision: 3,
    scale: 1,
    type: 'decimal',
  })
  rate!: number;

  @Field(() => User, { nullable: false })
  @ManyToOne(() => User, user => user.rates, { nullable: false })
  user!: User;

  @Field(() => GameEvent)
  @ManyToOne(() => GameEvent, gameEvent => gameEvent.rates)
  gameEvent!: GameEvent;

  @Field(() => Game)
  @ManyToOne(() => Game, game => game.rates)
  game!: Game[];

  @Field(() => Play)
  @ManyToOne(() => Play, play => play.rates)
  play!: Play[];
}
