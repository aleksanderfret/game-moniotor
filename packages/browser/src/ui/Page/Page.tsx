import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  min-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.background.contrast};
`;

export default Page;
