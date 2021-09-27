import createStyledComponentsTransformer from 'typescript-plugin-styled-components';

import createRemoveDataTestIdTransformer from './removeDataTestIdTransformer';

const styledComponentsTransformer = createStyledComponentsTransformer();
const removeDataTestIdTransformer = createRemoveDataTestIdTransformer();

export const getCustomDevTransformers = () => ({
  before: [styledComponentsTransformer]
});

export const getCustomProdTransformers = () => ({
  before: [removeDataTestIdTransformer, styledComponentsTransformer]
});
