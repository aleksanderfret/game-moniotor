/* eslint-disable import/no-cycle */
import { Column, Entity, ManyToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import Game from 'modules/game/entity/gameEntity';
import GameEvent from 'modules/gameEvent/entity/gameEventEntity';
import User from 'modules/user/entity/userEntity';
import Publisher from 'modules/game/entity/publisherEntity';
import Designer from 'modules/game/entity/designerEntity';
import Artist from 'modules/game/entity/artistEntity';
import { RateType } from '../types';

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
  game!: Game;

  @Field(() => Publisher)
  @ManyToOne(() => Publisher, publisher => publisher.rates)
  publisher!: Publisher;

  @Field(() => Designer)
  @ManyToOne(() => Designer, designer => designer.rates)
  designer!: Designer;

  @Field(() => Artist)
  @ManyToOne(() => Artist, artist => artist.rates)
  artist!: Artist;

  @Field(() => RateType)
  @Column({
    default: RateType.General,
    enum: RateType,
    nullable: true,
    type: 'enum',
  })
  type!: RateType;
}
