import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 180px 1fr;

  width: 100%;
  max-width: 1140px;

  padding: 30px 0;
`;

export const Content = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 25px;
`;
