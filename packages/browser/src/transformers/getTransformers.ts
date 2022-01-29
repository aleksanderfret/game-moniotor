import createRemoveDataTestIdTransformer from './removeDataTestIdTransformer';

const removeDataTestIdTransformer = createRemoveDataTestIdTransformer();

export const getCustomProdTransformers = () => ({
  before: [removeDataTestIdTransformer]
});
