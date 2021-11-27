import { registerEnumType } from 'type-graphql';

export enum Status {
  Active = 'active',
  Deleted = 'deleted',
  Invited = 'invited',
  Registered = 'registered'
}

registerEnumType(Status, {
  name: 'Status'
});
