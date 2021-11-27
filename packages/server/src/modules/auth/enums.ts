import { registerEnumType } from 'type-graphql';

export enum TokenType {
  DeleteAccount = 'DeleteAccount',
  ResetPassword = 'ResetPassword',
  SignUpConfirm = 'SignUpConfirm'
}

registerEnumType(TokenType, {
  name: 'TokenType'
});
