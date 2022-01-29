import { Field, ObjectType } from 'type-graphql';
import {
  Entity as TypeOrmEntity,
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@TypeOrmEntity()
abstract class Entity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @CreateDateColumn({ nullable: false, type: 'timestamptz' })
  createdAt!: Date;

  @Field()
  @CreateDateColumn({ nullable: false, type: 'timestamptz' })
  updatedAt!: Date;
}

export default Entity;
