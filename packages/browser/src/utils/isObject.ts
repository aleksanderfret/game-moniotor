import isPlainObject from 'lodash/isPlainObject';

const isObject = (obj: any): obj is object => isPlainObject(obj);

export default isObject;
