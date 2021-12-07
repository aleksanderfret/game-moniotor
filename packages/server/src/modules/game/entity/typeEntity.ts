/* eslint-disable import/no-cycle */
import { Column, Entity, OneToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import { Icon } from 'enums/enums';
import BaseEntity from 'db/baseEntity';
import Game from 'modules/game/entity/gameEntity';
import { GameType } from 'modules/game/enums';

@ObjectType()
@Entity()
export default class Type extends BaseEntity {
  @Field({ nullable: true })
  @Column({ length: 1000, nullable: true, type: 'varchar' })
  description!: string;

  @Field(() => Icon, { nullable: true })
  @Column({
    enum: Icon,
    nullable: true,
    type: 'enum'
  })
  icon!: Icon;

  @Field()
  @Column({
    enum: GameType,
    nullable: true,
    type: 'enum'
  })
  name!: string;

  @Field(() => Game)
  @OneToMany(() => Game, game => game.gameType)
  games!: Game[];
}
