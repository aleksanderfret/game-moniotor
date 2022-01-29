import {
  isJsxAttribute,
  Node,
  TransformerFactory,
  visitEachChild,
  visitNode,
  Visitor,
} from 'typescript';

// taken from https://github.com/andrewbents/typescript-transformer-jsx-remove-data-test-id
export function createRemoveDataTestIdTransformer<
  T extends Node
>(): TransformerFactory<T> {
  return context => {
    const visit: Visitor = node => {
      if (isJsxAttribute(node)) {
        if (
          node.name.getText() === 'data-test-id' ||
          node.name.getText() === 'data-testid' ||
          node.name.getText() === 'data-testId'
        ) {
          return undefined;
        }
      }

      return visitEachChild(node, visit, context);
    };

    return node => visitNode(node, visit);
  };
}

export default createRemoveDataTestIdTransformer;
