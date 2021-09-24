import createStyledComponentsTransformer from 'typescript-plugin-styled-components';

const styledComponentsTransformer = createStyledComponentsTransformer();

const getCustomTransformers = () => ({ before: [styledComponentsTransformer] });

export default getCustomTransformers;
