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

@ObjectType()
@Entity()
export default class Rate extends BaseEntity {
  @Field({
    nullable: false,
  })
  @Column({
    precision: 2,
    scale: 0,
    type: 'numeric',
  })
  rate!: number;

  @Field(() => User, { nullable: false })
  @ManyToOne(() => User, user => user.rates, { nullable: false })
  user!: User;

  @Field(() => GameEvent, { nullable: true })
  @ManyToOne(() => GameEvent, gameEvent => gameEvent.rates)
  gameEvent!: GameEvent;

  @Field(() => Game, { nullable: true })
  @ManyToOne(() => Game, game => game.rates)
  game!: Game;

  @Field(() => Publisher, { nullable: true })
  @ManyToOne(() => Publisher, publisher => publisher.rates)
  publisher!: Publisher;

  @Field(() => Designer, { nullable: true })
  @ManyToOne(() => Designer, designer => designer.rates)
  designer!: Designer;

  @Field(() => Artist, { nullable: true })
  @ManyToOne(() => Artist, artist => artist.rates)
  artist!: Artist;
}
