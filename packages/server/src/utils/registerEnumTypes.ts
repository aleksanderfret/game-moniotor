import { registerEnumType } from 'type-graphql';

const registerEnumTypes = (enums: [object, string][]) =>
  enums.forEach(([enumObject, name]) => registerEnumType(enumObject, { name }));

export default registerEnumTypes;
