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
export default class Favorite extends BaseEntity {
  @Field({
    nullable: false,
  })
  @Column({
    default: false,
  })
  favorite!: boolean;

  @Field(() => User, { nullable: false })
  @ManyToOne(() => User, user => user.favorites, { nullable: false })
  user!: User;

  @Field(() => GameEvent)
  @ManyToOne(() => GameEvent, gameEvent => gameEvent.favorites)
  gameEvent!: GameEvent;

  @Field(() => Game)
  @ManyToOne(() => Game, game => game.favorites)
  game!: Game;

  @Field(() => Publisher)
  @ManyToOne(() => Publisher, publisher => publisher.favorites)
  publisher!: Publisher;

  @Field(() => Designer)
  @ManyToOne(() => Designer, designer => designer.favorites)
  designer!: Designer;

  @Field(() => Artist)
  @ManyToOne(() => Artist, artist => artist.favorites)
  artist!: Artist;
}
