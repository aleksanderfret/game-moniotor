/* eslint-disable import/no-cycle */
import { Column, Entity, ManyToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import { Icon } from 'enums/enums';
import BaseEntity from 'db/baseEntity';
import Game from './gameEntity';

@ObjectType()
@Entity()
export default class Mechanics extends BaseEntity {
  @Field({ nullable: true })
  @Column({ length: 1000, nullable: true, type: 'varchar' })
  description!: string;

  @Field(() => Icon, { nullable: true })
  @Column({
    enum: Icon,
    nullable: true,
    type: 'enum',
  })
  icon!: Icon;

  @Field()
  @Column({ length: 50, nullable: false, type: 'varchar' })
  name!: string;

  @Field(() => Game)
  @ManyToMany(() => Game, game => game.categories)
  games!: Game[];
}
