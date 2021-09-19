/* eslint-disable import/no-cycle */
import { Column, Entity } from 'typeorm';

import BaseEntity from 'db/baseEntity';
import { AccountStatus } from 'enums/enums';

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

  @Column({ length: 50, nullable: true, type: 'varchar' })
  provider!: string;

  @Column({ default: 0, nullable: false, type: 'integer' })
  tokenVersion!: number;

  @Column({
    default: AccountStatus.Active,
    enum: AccountStatus,
    nullable: false,
    type: 'enum'
  })
  status!: AccountStatus;
}
