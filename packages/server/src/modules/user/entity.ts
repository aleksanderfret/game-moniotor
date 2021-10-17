/* eslint-disable import/no-cycle */
import { Column, Entity, OneToMany } from 'typeorm';

import { Status } from 'modules/auth/enums';
import BaseEntity from 'db/baseEntity';
import Token from 'modules/auth/entity';

@Entity()
export default class User extends BaseEntity {
  @Column({ nullable: true, type: 'timestamptz' })
  activeAt!: Date;

  @Column({ length: 256, nullable: true, type: 'varchar' })
  avatarUrl!: string;

  @Column({ nullable: true, type: 'timestamptz' })
  deletedAt!: Date;

  @Column({ length: 128, nullable: false, type: 'varchar', unique: true })
  email!: string;

  @Column({ length: 50, nullable: true, type: 'varchar' })
  name!: string;

  @Column({ length: 128, nullable: true, type: 'varchar' })
  password!: string;

  @Column({ nullable: false, type: 'timestamptz' })
  policy!: Date;

  @Column({ length: 50, nullable: true, type: 'varchar' })
  provider!: string;

  @Column({ default: 0, nullable: false, type: 'integer' })
  tokenVersion!: number;

  @Column({
    default: Status.Active,
    enum: Status,
    nullable: false,
    type: 'enum'
  })
  status!: Status;

  @OneToMany(() => Token, token => token.user)
  token!: Token[];
}
