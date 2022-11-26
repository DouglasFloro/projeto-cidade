import styled from 'styled-components';
import img from '../../img/fundo.png';

export const Wrapper = styled.header`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: 225px;
  max-width: 100%;

  background: url(${img}) repeat;
`;
