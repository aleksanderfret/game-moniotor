/* eslint-disable import/no-cycle */
import { Column, Entity, OneToOne, ManyToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import Game from 'modules/game/entity/gameEntity';
import Address from 'modules/address/entity/addressEntity';

@ObjectType()
@Entity()
export default class Publisher extends BaseEntity {
  @Field()
  @Column({ length: 50, nullable: false, type: 'varchar' })
  name!: string;

  @Field(() => Game)
  @ManyToMany(() => Game, game => game.categories)
  games!: Game[];

  @Field(() => Address)
  @OneToOne(() => Address, address => address.plays)
  address!: Address;

  @Field({ nullable: true })
  @Column({ length: 256, nullable: true, type: 'varchar' })
  logo!: string;
}
