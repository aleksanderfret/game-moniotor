/* eslint-disable import/no-cycle */
import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import { Icon } from 'enums/enums';
import BaseEntity from 'db/baseEntity';
import Game from 'modules/game/entity/gameEntity';
import Publisher from 'modules/game/entity/publisherEntity';
import Play from 'modules/play/entity/playEntity';

@ObjectType()
@Entity()
export default class Address extends BaseEntity {
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
  @Column({ length: 128, nullable: true, type: 'varchar' })
  address1!: string;

  @Field()
  @Column({ length: 128, nullable: true, type: 'varchar' })
  address2!: string;

  @Field()
  @Column({ length: 128, nullable: true, type: 'varchar' })
  address3!: string;

  @Field()
  @Column({ length: 128, nullable: true, type: 'varchar' })
  city!: string;

  @Field()
  @Column({ length: 128, nullable: true, type: 'varchar' })
  state!: string;

  @Field()
  @Column({ length: 128, nullable: true, type: 'varchar' })
  postalCode!: string;

  @Field()
  @Column({ length: 256, nullable: true, type: 'varchar' })
  country!: string;

  @Field(() => Game)
  @ManyToOne(() => Game, game => game.address)
  games!: Game[];

  @Field(() => Play)
  @ManyToOne(() => Play, play => play.address)
  plays!: Play[];

  @Field(() => Publisher, { nullable: true })
  @OneToOne(() => Publisher, publisher => publisher.address)
  publisher!: Publisher[];
}
